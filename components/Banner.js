import { Box, Button, Divider, Heading } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

function Banner() {
  return (
    <Box
      className="h-[90vh] w-full flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url(" + "/img/bg1.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
      <div className="z-10 flex flex-col items-center justify-center w-full ">
        <Divider
          width="75%"
          className="h-1 mb-3 text-transparent bg-clip-text bg-gradient-to-tr from-gray-100 via-red-600 to-gray-100"
        />
        <Heading
          as="h1"
          size="4xl"
          className="font-bold text-center text-white "
        >
          BGB FINANCIAL
        </Heading>
        <Divider
          width="75%"
          className="w-3/5 h-1 mt-3 text-transparent bg-clip-text bg-gradient-to-tr from-gray-100 via-red-600 to-gray-100"
        />
        <Heading as="h2" size="lg" className="font-semibold text-white">
          Unique Needs. Unique Solutions
        </Heading>
        <Button
          colorScheme="red"
          className="px-5 py-3 mt-5 text-lg font-semibold text-white rounded-md animate-bounce"
        >
          <AiFillCaretDown />
        </Button>
      </div>
    </Box>
  );
}

export default Banner;
