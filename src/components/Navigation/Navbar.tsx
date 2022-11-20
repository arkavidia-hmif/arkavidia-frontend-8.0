import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ArrowDownIcon from '@src/components/Icon/ArrowDownIcon'
import ProfileIcon from '@src/components/Icon/ProfileIcon'
import LogoArkav from '@src/assets/images/logo/logo-arkavidia.png'

const MENU_LIST = [
  { text: 'Home', href: '/' },
  {
    text: 'Event',
    href: '/event',
    contents: [
      { text: 'Arkavidia Academya', href: '/event/academya' },
      { text: 'Arkavidia For Indonesia', href: '/event/afi' },
      { text: 'Arkavidia Goes To School', href: '/event/agts' },
      { text: 'Arkavidia Talks', href: '/event/talks' },
      { text: 'IT Fest', href: '/event/itfest' }
    ]
  },
  {
    text: 'Competition',
    href: '/competition',
    contents: [
      {
        text: 'Competitive Programming',
        href: '/competition/competitive-programming'
      },
      { text: 'Datavidia', href: '/competition/datavidia' },
      { text: 'Arkalogica', href: '/competition/arkalogica' },
      { text: 'UXVidia', href: '/competition/uxvidia' }
    ]
  },
  { text: 'LMS', href: '/lms' },
  { text: 'Dashboard', href: '/dashboard' },
  { text: 'Sign In | Sign Up', href: '/sign-in', border: true },
  { text: 'Admin', href: '/admin', border: true },
  { text: 'Profile', href: '/profile', border: true }
]

function MobileHoverDropdown({
  contents,
  dropdownIdx,
  idx
}: {
  contents: Array<{ text: string; href: string }>
  dropdownIdx: number
  idx: number
}) {
  return (
    <div
      className={`${
        dropdownIdx == idx ? '' : 'hidden'
      } flex flex-col text-left`}
    >
      {contents.map((content, idx) => (
        <a
          key={idx}
          className="py-2 text-blue-900 opacity-90 hover:opacity-70 font-bold"
          href={content.href}
        >
          {content.text}
        </a>
      ))}
    </div>
  )
}

function HoverDropdown({
  contents
}: {
  contents: Array<{ text: string; href: string }>
}) {
  return (
    <div className="hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-black rounded-2xl bg-white">
      {contents.map((content, idx) => (
        <a
          key={idx}
          className="px-5 py-3 hover:bg-blue-900 text-blue-900 hover:text-white font-bold"
          href={content.href}
        >
          {content.text}
        </a>
      ))}
    </div>
  )
}

function MobileNav({
  isLogged,
  isAdmin,
  open,
  dropdownIdx,
  setDropdownIdx
}: {
  isLogged: boolean
  isAdmin: boolean
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  dropdownIdx: number
  setDropdownIdx: Dispatch<SetStateAction<number>>
}) {
  const router = useRouter()
  const [hoverIdx, setHoverIdx] = useState(-1)

  return (
    <div
      className={`fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen lg:hidden bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-screen justify-center items-center">
        {MENU_LIST.map((menu, idx) => {
          if (
            (!isLogged && [0, 1, 2, 5].includes(idx)) ||
            (isLogged && isAdmin && [0, 1, 2, 3, 4, 6].includes(idx)) ||
            (isLogged && !isAdmin && [0, 1, 2, 4, 7].includes(idx))
          ) {
            return (
              <div
                key={idx}
                className="w-40 mx-auto"
                onClick={() => {
                  setDropdownIdx(dropdownIdx == idx ? -1 : idx)
                }}
                onMouseEnter={() => {
                  setHoverIdx(idx)
                }}
                onMouseLeave={() => {
                  setHoverIdx(-1)
                }}
              >
                <a
                  className={`cursor-pointer hover:opacity-80 inline-block py-2 text-blue-900 font-bold ${
                    [5, 6, 7].includes(idx) ? 'mt-4' : ''
                  }`}
                  href={menu.contents ? undefined : menu.href}
                >
                  <div
                    className={`${
                      [5, 6, 7].includes(idx)
                        ? router.pathname.includes(menu.href)
                          ? 'bg-blue-900 rounded-xl text-white px-4'
                          : 'border-2 px-4 border-blue-900 rounded-xl'
                        : ''
                    } py-2 inline-flex items-center`}
                  >
                    {/* Replace ProfileIcon with AdminIcon later */}
                    {isAdmin && idx == 6 ? (
                      <ProfileIcon
                        height={25}
                        width={25}
                        fill={
                          router.pathname.includes(menu.href) ? 'white' : ''
                        }
                        className={'mr-2'}
                      ></ProfileIcon>
                    ) : (
                      ''
                    )}
                    {!isAdmin && idx == 7 ? (
                      <ProfileIcon
                        height={25}
                        width={25}
                        fill={
                          router.pathname.includes(menu.href) ? 'white' : ''
                        }
                        className={'mr-2'}
                      ></ProfileIcon>
                    ) : (
                      ''
                    )}
                    {menu.text}
                    {menu.contents ? (
                      <ArrowDownIcon className="ml-1"></ArrowDownIcon>
                    ) : (
                      ''
                    )}
                  </div>
                </a>
                {menu.contents ? (
                  <MobileHoverDropdown
                    contents={menu.contents}
                    dropdownIdx={dropdownIdx}
                    idx={idx}
                  ></MobileHoverDropdown>
                ) : (
                  ''
                )}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default function Navbar({
  isLogged,
  isAdmin
}: {
  isLogged: boolean
  isAdmin: boolean
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [dropdownIdx, setDropdownIdx] = useState(-1)

  return (
    <nav className="fixed flex top-0 w-full justify-center z-50">
      <div
        className={`${
          open ? 'h-screen' : ''
        } bg-white w-4/5 filter pl-12 pr-8 lg:px-16 mx-4 mt-4 py-4 h-20 lg:h-24 items-center border-solid border-2 border-black rounded-full flex`}
      >
        <MobileNav
          isLogged={isLogged}
          isAdmin={isAdmin}
          open={open}
          setOpen={setOpen}
          dropdownIdx={dropdownIdx}
          setDropdownIdx={setDropdownIdx}
        />
        <div className="w-3/12 flex items-center">
          <a href="/">
            <Image
              src={LogoArkav}
              width={50}
              height={50}
              alt="Logo Arkavidia"
            />
          </a>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className={`${
              open ? 'fixed right-6' : ''
            } right-12 top-11 z-50 flex flex-col w-10 h-6 justify-between items-center lg:hidden`}
            onClick={() => {
              setOpen(!open)
            }}
          >
            <span
              className={`h-1 w-6 bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'w-7 bg-blue-900 rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`h-1 w-6 bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? 'h-0' : 'w-6'
              }`}
            />
            <span
              className={`h-1 w-6 bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'w-7 bg-blue-900 -rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
          <div className="hidden lg:flex">
            {MENU_LIST.map((menu, idx) => {
              if (
                (!isLogged && [0, 1, 2, 5].includes(idx)) ||
                (isLogged && isAdmin && [0, 1, 2, 3, 4, 6].includes(idx)) ||
                (isLogged && !isAdmin && [0, 1, 2, 4, 7].includes(idx))
              ) {
                return (
                  <div key={idx} className="relative inline-flex items-center">
                    <a
                      href={menu.href}
                      className={`${
                        router.pathname.includes(menu.href) &&
                        ![5, 6, 7].includes(idx)
                          ? 'active px-6 mx-2 py-8'
                          : [5, 6, 7].includes(idx)
                          ? 'ml-8'
                          : 'px-6 mx-2 py-8'
                      } ${
                        menu.contents ? 'peer' : 'inline-block'
                      } text-blue-900 hover:opacity-80 font-bold`}
                    >
                      <div
                        className={`${
                          (router.pathname == menu.href && idx == 0) ||
                          (router.pathname.includes(menu.href) && idx != 0)
                            ? [5, 6, 7].includes(idx)
                              ? 'bg-blue-900 rounded-xl text-white px-8'
                              : 'border-b-2 border-blue-900'
                            : [5, 6, 7].includes(idx)
                            ? 'border-2 px-8 border-blue-900 rounded-xl'
                            : ''
                        } inline-flex items-center ${
                          [5, 6, 7].includes(idx) ? 'py-2' : 'py-1'
                        }`}
                      >
                        {/* Replace ProfileIcon with AdminIcon later */}
                        {isAdmin && idx == 6 ? (
                          <ProfileIcon
                            height={25}
                            width={25}
                            fill={router.pathname == menu.href ? 'white' : ''}
                            className={'mr-2'}
                          ></ProfileIcon>
                        ) : (
                          ''
                        )}
                        {!isAdmin && idx == 7 ? (
                          <ProfileIcon
                            height={25}
                            width={25}
                            fill={router.pathname == menu.href ? 'white' : ''}
                            className={'mr-2'}
                          ></ProfileIcon>
                        ) : (
                          ''
                        )}
                        {menu.text}
                        {menu.contents ? <ArrowDownIcon></ArrowDownIcon> : ''}
                      </div>
                    </a>
                    {menu.contents ? (
                      <HoverDropdown contents={menu.contents}></HoverDropdown>
                    ) : (
                      ''
                    )}
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
