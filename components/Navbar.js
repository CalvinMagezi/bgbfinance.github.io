import { Box, Container } from "@chakra-ui/react";
import { navbarState } from "atoms/navbarStateAtom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRecoilState } from "recoil";

function Navbar() {
  const [navbar, setNavbar] = useRecoilState(navbarState);
  return (
    <Box
      className={`${
        navbar
          ? "absolute hidden z-0 w-0 h-0"
          : "w-full z-50 sticky top-0 bg-[whitesmoke]"
      }`}
    >
      <div className="flex items-center justify-between px-10 py-5 lg:px-20">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">
            BGB<span className="text-red-600">.</span>
          </h1>
        </div>
        <ul className="items-center hidden space-x-7 lg:inline-flex">
          <li className="navbarLink">
            <a href="/">
              <h1>Home</h1>
            </a>
          </li>
          <li className="navbarLink">
            <a href="/#about">
              <h1>About</h1>
            </a>
          </li>
          <li className="navbarLink">
            <a href="/#services">
              <h1>Services</h1>
            </a>
          </li>
          <li className="navbarLink">
            <a href="/#values">
              <h1>Values</h1>
            </a>
          </li>
          <li className="navbarLink">
            <a href="/#contact">
              <h1>Contact</h1>
            </a>
          </li>
        </ul>
        <GiHamburgerMenu
          onClick={() => setNavbar(true)}
          className="inline-flex text-lg lg:hidden"
        />
      </div>
    </Box>
  );
}

export default Navbar;
