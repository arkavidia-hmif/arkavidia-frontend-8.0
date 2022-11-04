import ArrowDownIcon from "src/components/Icon/ArrowDownIcon";
import { Menu } from '@headlessui/react';

interface Content {
  text: string;
  href: string;
}

const NavButton = ({ text, href, contents, active, type }: { text: string; href: string; contents: Content[]; active: boolean; type: string }) => {
  return (
    <Menu as="div" className={`relative ${type == "mobile" ? "text-center" : ""} w-full inline-block`}>
      <Menu.Button
        className={`nav__item ${active ? "active" : ""} inline-flex items-center ${type == "mobile" ? "py-2" : "py-2.5 px-7"}`}
      >
        {text}
        <ArrowDownIcon></ArrowDownIcon>
      </Menu.Button>
      <Menu.Items
        className={`${type == "mobile" ? "flex flex-col relative" : "absolute"} border-solid border-2 border-black rounded-2xl bg-white w-56 left-1/2 -translate-x-1/2`}
      >
        {contents.map((menu, idx) => (
          <Menu.Item
            as="div"
            className={`inline-block text-center nav__menu-list ${type == "mobile" ? "py-1" : "py-2"}`}
            key={idx}
          >
            <a
              className="mx-auto"
              href={menu.href}
            >
              {menu.text}
            </a>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
};

export default NavButton;