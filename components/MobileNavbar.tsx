import { Box } from "@chakra-ui/react";
import { navbarState } from "atoms/navbarStateAtom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";

function MobileNavbar() {
  const [navbar, setNavbar] = useRecoilState(navbarState);

  return (
    <Box
      className={`${
        navbar == true
          ? "bg-opacity-0 fixed w-screen h-screen left-0 top-0 z-40 flex flex-col items-center justify-center"
          : "hidden w-0  h-0"
      }`}
    >
      <div
        onClick={() => setNavbar(false)}
        className="absolute z-40 w-screen h-screen bg-black bg-opacity-50"
      ></div>

      <Box className="z-50 flex flex-col items-center w-3/5 h-screen ">
        <ul className="flex flex-col space-y-5 items-center mt-10 px-10 py-10 rounded-lg bg-[whitesmoke] text-black">
          <li onClick={() => setNavbar(false)}>
            <AiOutlineCloseCircle className="text-xl text-red-600" />
          </li>
          <li onClick={() => setNavbar(false)} className="navbarLink">
            <a href="/">
              <h1 className="text-2xl font-bold">Home</h1>
            </a>
          </li>
          <li onClick={() => setNavbar(false)} className="navbarLink">
            <a href="/#about">
              <h1 className="text-2xl font-bold">About</h1>
            </a>
          </li>
          <li onClick={() => setNavbar(false)} className="navbarLink">
            <a href="/#services">
              <h1 className="text-2xl font-bold">Services</h1>
            </a>
          </li>
          <li onClick={() => setNavbar(false)} className="navbarLink">
            <a href="/#values">
              <h1 className="text-2xl font-bold">Values</h1>
            </a>
          </li>
          <li onClick={() => setNavbar(false)} className="navbarLink">
            <a href="/#contact">
              <h1 className="text-2xl font-bold">Contact</h1>
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default MobileNavbar;
