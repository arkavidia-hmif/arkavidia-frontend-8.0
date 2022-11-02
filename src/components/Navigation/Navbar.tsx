import Image from "next/image";
import Logo from "src/assets/images/logo_arkav.png";
import BurgerMenu from "./BurgerMenu";
import NavDesktop from "./NavDesktop";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Event", href: "/event", contents: [
    { text: "Arkavidia Academya", href: "/event/academya" },
    { text: "Arkavidia For Indonesia", href: "/event/afi" },
    { text: "Arkavidia Goes To School", href: "/event/gts" },
    { text: "Arkavidia Talks", href: "/event/talks" },
    { text: "IT Fest", href: "/event/itfest"} ]},
  { text: "Competition", href: "/competition", contents: [
    { text: "Competitive Programming", href: "/competition/cp" },
    { text: "Datavidia", href: "/competition/datavidia" },
    { text: "Arkalogica", href: "/competition/arkalogica" },
    { text: "UXVidia", href: "/competition/uxvidia "} ]},
  { text: "LMS", href: "/lms" },
  { text: "Dashboard", href: "/dashboard" },
  { text: "Log In | Sign Up", href: "/sign", border: true },
  { text: "Admin", href: "/admin", border: true },
  { text: "Profile", href: "/profile", border: true },
];

// isLoggedIn = true,false, loggedInAs = "admin","user", type = "mobile", "desktop"
const Navbar = ({ isLoggedIn, loggedInAs, type }: { isLoggedIn: boolean, loggedInAs: string, type: string }) => {
  return (
    <header className="sticky top-1 z-50 ">
      <nav className={`nav flex items-center pl-7 py-1 md:py-2 lg:py-3 bg-white border-solid border-2 border-black rounded-full`}>
        <a href="/">
          <Image src={Logo} height={type == "mobile" ? "35%" : "45%"} width={type == "mobile" ? "25%" : "30%"} alt="Logo Arkavidia"></Image>
        </a>
        {type == "mobile" ?
          <div className="ml-auto pl-10">
            <BurgerMenu isLoggedIn={isLoggedIn} loggedInAs={loggedInAs} menu={MENU_LIST}></BurgerMenu>
          </div> :
          <NavDesktop isLoggedIn={isLoggedIn} loggedInAs={loggedInAs} menu={MENU_LIST}></NavDesktop>}
      </nav>
    </header>
  );
};

export default Navbar;