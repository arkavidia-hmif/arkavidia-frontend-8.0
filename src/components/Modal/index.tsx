/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable multiline-ternary */
import ModalCloseIcon from '../Icon/ModalCloseIcon'
import clsx from 'clsx'
import React, { useState, useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

/** Modal window variants */
type Variants = 'variant-1' | 'variant-2' | 'variant-3' | 'variant-image'

/** Modal window properties */
interface AppProps {
  header: string
  variant: Variants
  description?: string
  primaryButton?: JSX.Element
  secondaryButton?: JSX.Element
  iconElement?: JSX.Element
  image?: StaticImageData
}

/** Variant styling */
interface VariantStyle {
  iconSizeLarge: number
  iconSizeSmall: number
  btnSizeLarge: number
  btnSizeSmall: number
  container: string
  iconContainer: string
  mainContainer: string
  header: string
  desc: string
  buttonContainer: string
}

/**
 * Modal component
 * @param header - Modal header
 * @param variant - Modal variant ("variant-1", "variant-2", "variant-3", "variant-image")
 * @param description - Modal description text
 * @param primaryButton - Primary button
 * @param secondaryButton - Secondary button
 * @param iconElement - Modal icon
 * @param image - Modal image
 */
export default function Modal({
  header,
  variant,
  description,
  primaryButton,
  secondaryButton,
  iconElement,
  image
}: AppProps): JSX.Element {
  /** Styling modal window variants */
  const variantStyle: { [key in Variants]: VariantStyle } = {
    'variant-1': {
      iconSizeLarge: 84,
      iconSizeSmall: 77,
      btnSizeLarge: 185,
      btnSizeSmall: 116,
      container: 'w-56 md:w-[598px] md:flex',
      iconContainer:
        'bg-[rgba(11,26,92,0.3)] flex items-center justify-center rounded-t-xl py-1.5 md:rounded-t-none md:rounded-l-xl md:w-28 md:-mr-5 md:z-40',
      mainContainer:
        'pt-3 pb-3 gap-3 rounded-xl md:w-full md:pt-4 md:pl-9 md:pr-8 md:pb-8',
      header: 'md:text-left md:w-full',
      desc: 'md:text-left md:w-full md:border-t md:border-t-[#DBDDE0] md:pt-3',
      buttonContainer:
        'border-t border-t-[#DBDDE0] w-full flex flex-col items-center justify-center mt-1 pt-4 gap-4 md:flex-row-reverse md:justify-start md:border-none md:-mb-4'
    },
    'variant-2': {
      iconSizeLarge: 91,
      iconSizeSmall: 77,
      btnSizeLarge: 185,
      btnSizeSmall: 185,
      container: 'w-56 md:w-[415px]',
      iconContainer:
        'bg-[rgba(11,26,92,0.3)] w-full flex items-center justify-center rounded-t-xl py-1.5',
      mainContainer: 'pt-3 pb-3 gap-3 rounded-xl md:pb-5 md:px-3.5',
      header: '',
      desc: 'md:w-2/3',
      buttonContainer:
        'border-t border-t-[#DBDDE0] w-full flex flex-col items-center justify-center mt-1 pt-4 gap-4 md:flex-row-reverse'
    },
    'variant-3': {
      iconSizeLarge: 49,
      iconSizeSmall: 22,
      btnSizeLarge: 185,
      btnSizeSmall: 116,
      container: 'w-56 md:w-72',
      iconContainer: '',
      mainContainer: 'gap-3 pt-5 pb-3 rounded-xl md:px-5',
      header: '',
      desc: '',
      buttonContainer:
        'border-t border-t-[#DBDDE0] w-full flex flex-col items-center justify-center mt-1 pt-4 gap-4 md:flex-row-reverse'
    },
    'variant-image': {
      iconSizeLarge: 0,
      iconSizeSmall: 0,
      btnSizeLarge: 185,
      btnSizeSmall: 116,
      container: 'w-56 md:w-72',
      iconContainer: '',
      mainContainer: 'gap-3 pt-9 pb-3 rounded-xl md:px-5',
      header: '',
      desc: '',
      buttonContainer:
        'border-t border-t-[#DBDDE0] w-full flex flex-col items-center justify-center mt-1 pt-4 gap-4 md:flex-row-reverse'
    }
  }

  // Throwing errors
  if (iconElement && image) {
    throw new Error('Cannot have both icon and image in this component')
  }
  if (variant === 'variant-image' && !image) {
    throw new Error(
      'Image must be provided when using the variant: "variant-image"'
    )
  }

  // Setting window width as a state
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      const handleResize = (): void => setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }
  }, [])

  // Function to hide modal window
  const hideModal = useRef<HTMLDivElement>(null)
  const handleClose = (): void => {
    if (hideModal.current?.className) {
      hideModal.current.className = 'hidden'
    }
  }

  // Rendering responsive icon
  let iconEl: JSX.Element | null = null
  if ((variant === 'variant-2' || variant === 'variant-1') && iconElement) {
    iconEl = (
      <div className={clsx(variantStyle[variant].iconContainer)}>
        {React.cloneElement(iconElement, {
          size:
            windowWidth > 768
              ? variantStyle[variant].iconSizeLarge
              : variantStyle[variant].iconSizeSmall
        })}
      </div>
    )
  }

  // Rendering responsive buttons
  let primaryBtnEl: JSX.Element | null = null
  if (primaryButton) {
    let btnSize: number =
      secondaryButton &&
      (variant === 'variant-3' || variant === 'variant-image')
        ? variantStyle[variant].btnSizeSmall
        : variantStyle[variant].btnSizeLarge
    if (windowWidth > 768 && variant === 'variant-1') {
      btnSize = variantStyle[variant].btnSizeSmall
    }
    primaryBtnEl = (
      <div className={clsx(variantStyle[variant].buttonContainer)}>
        {<primaryButton.type {...primaryButton.props} size={btnSize} />}
        {secondaryButton ? (
          <secondaryButton.type {...secondaryButton.props} size={btnSize} />
        ) : null}
      </div>
    )
  }

  // Header style
  const headerStyle: string =
    !iconElement && !primaryButton && !secondaryButton ? 'mt-4' : ''

  // Rendering modal window
  return (
    <div ref={hideModal} className="block">
      <div className={clsx('rounded-xl', variantStyle[variant].container)}>
        {iconEl}
        <div
          className={clsx(
            'relative flex flex-col items-center bg-gray200',
            variantStyle[variant].mainContainer
          )}
        >
          <button onClick={handleClose}>
            <ModalCloseIcon
              size={9.75}
              className="absolute top-4 right-4 cursor-pointer"
            />
          </button>
          {variant === 'variant-image' && image ? (
            <Image src={image} height={133} width={172} objectFit="cover" />
          ) : null}
          {variant === 'variant-3' && iconElement ? iconElement : null}
          <h6
            className={clsx(
              'font-varela text-[#1A4152] text-2xl text-center capitalize',
              variantStyle[variant].header,
              headerStyle
            )}
          >
            {header}
          </h6>
          <p
            className={clsx(
              'text-base text-center font-helvatica text-[rgba(26,65,82,0.54)] leading-5',
              variantStyle[variant].desc
            )}
          >
            {description}
          </p>
          {primaryBtnEl}
        </div>
      </div>
    </div>
  )
}
