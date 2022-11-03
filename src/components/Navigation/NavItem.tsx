import Link from "next/link";
const NavItem = ({ text, href, active }: { text: string; href: string; active: boolean }) => {
  return (
    <Link href={href}>
      <a href={href} className={`nav__item ${active ? "active" : ""} px-3 py-2.5`}>
        {text}
      </a>
    </Link>
  );
};

export default NavItem;