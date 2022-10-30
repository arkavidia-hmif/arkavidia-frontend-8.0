import React, { useState } from "react";
import NavItem from "./NavItem";
import NavButton from "./NavButton";
import ProfileIcon from "../Icon/ProfileIcon";

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

const NavDesktop = ({ isLoggedIn, loggedInAs, menu }: { isLoggedIn: boolean, loggedInAs: string; menu: Content[] }) => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div className={`${navActive ? "active" : ""} ml-auto pr-5 nav__menu-list`}>
      {menu.map((content, idx) => {
        if (content.contents) {
          return (
            <div
              className="inline-block"
              key={content.text}
            >
              <NavButton key={idx} text={content.text} href={content.href} active={false} contents={content.contents} type="desktop"></NavButton>
            </div>
          );
        } else {
          if ((!isLoggedIn && [0, 1, 2, 5].includes(idx))
              || (isLoggedIn && loggedInAs == "admin" && [0, 1, 2, 3, 4, 6].includes(idx))
              || (isLoggedIn && loggedInAs == "user" && [0, 1, 2, 4, 7].includes(idx))) {
            return (
              <div
                className={`${content.border ? "border-solid border-2 border-black rounded-2xl" : ""} inline-flex items-center px-7`}
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={content.text}
              >
                {/* Replace with "admin" profile icon */}
                {loggedInAs == "admin" && idx == 6 ? <ProfileIcon></ProfileIcon> : ""}
                {loggedInAs == "user" && idx == 7 ? <ProfileIcon></ProfileIcon> : ""}                    
                <NavItem active={activeIdx === idx} {...content}/>
              </div>
            );
          }
      }})}
    </div>
  );
};

export default NavDesktop;