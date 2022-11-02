import Svg, { SvgProps } from './Svg'

const ModalCloseIcon = (props: SvgProps): JSX.Element => {
  return (
    <Svg viewBox="0 0 10 11" {...props}>
      <path
        d="M9.64823 1.88082L6.02326 5.50578L9.64823 9.13074C9.93304 9.41556 9.93304 9.88163 9.64823 10.1664C9.36341 10.4513 8.89734 10.4513 8.61252 10.1664L4.98756 6.54148L1.3626 10.1664C1.07778 10.4513 0.611714 10.4513 0.326895 10.1664C0.0420766 9.88163 0.0420766 9.41556 0.326895 9.13074L3.95186 5.50578L0.326895 1.88082C0.0420766 1.596 0.0420766 1.12993 0.326895 0.845114C0.611714 0.560296 1.07778 0.560296 1.3626 0.845114L4.98756 4.47008L8.61252 0.845114C8.89734 0.560296 9.36341 0.560296 9.64823 0.845114C9.93304 1.12993 9.93304 1.596 9.64823 1.88082Z"
        fill="#FF634B"
      />
    </Svg>
  )
}

export default ModalCloseIcon