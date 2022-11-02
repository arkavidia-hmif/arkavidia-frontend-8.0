import MenuIcon from "src/components/Icon/MenuIcon";
import { Menu, Transition } from '@headlessui/react';
import React, { useState } from "react";
import NavButton from "./NavButton";

interface SubContent {
  text: string;
  href: string;
}

interface Content {
  text: string;
  href: string;
  contents?: Array<SubContent>;
  border?: boolean;
}

const BurgerMenu = ({ isLoggedIn, loggedInAs, menu }: { isLoggedIn: boolean, loggedInAs: string, menu: Content[] }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block pr-7">
      <Menu.Button
      >
        <MenuIcon></MenuIcon>
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      ></Transition>
      <Menu.Items
        as="div"
        className={"fixed flex flex-col w-full mt-2 top-44 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border-2 border-black rounded-3xl"}
      >
        {menu.map((content, idx) => {
          if (content.contents) {
            return (
              <div
                className="inline-block"
                key={content.text}
              >
                <NavButton key={idx} text={content.text} href={content.href} active={false} contents={content.contents} type="mobile"></NavButton>
              </div>
            );
          } else {
            if ((!isLoggedIn && [0, 1, 2, 5].includes(idx))
                || (isLoggedIn && loggedInAs == "admin" && [0, 1, 2, 3, 4, 6].includes(idx))
                || (isLoggedIn && loggedInAs == "user" && [0, 1, 2, 4, 7].includes(idx))) {
              return (
                <Menu.Item
                  as="div"
                  className={`${content.border ? "border-solid border-2 border-black rounded-2xl mx-2" : ""} py-1 my-1.5 linline-block text-center nav__menu-list py-2`}
                  key={idx}
                >
                  <a
                    className="mx-auto"
                    href={content.href}
                  >
                    {content.text}
                  </a>
                </Menu.Item>
              );
            }}})}
      </Menu.Items>
    </Menu>
  );
};

export default BurgerMenu;