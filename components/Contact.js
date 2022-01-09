import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
function Contact() {
  return (
    <Box
      id="contact"
      className=" min-h-[70vh] justify-center items-center flex flex-col w-full"
    >
      <Heading as="h1" className="text-center title">
        Contact
      </Heading>

      <Grid className="w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:px-32">
        <GridItem className="w-full px-1 py-5 bg-white rounded-md shadow-lg lg:col-span-2">
          <Flex className="flex-col items-center text-center">
            <GoLocation className="text-4xl text-red-600" />
            <Heading>Our Address</Heading>
            <Text>Simba Towers, Plot 22 John Babiha (Acacia) Ave, Kampala</Text>
          </Flex>
        </GridItem>
        <GridItem className="w-full px-1 py-5 bg-white rounded-md shadow-lg ">
          <Flex className="flex-col items-center text-center">
            <AiOutlineMail className="text-4xl text-red-600" />
            <Heading>Email Us</Heading>
            <Text>gbitature@gmail.com</Text>
          </Flex>
        </GridItem>
        <GridItem className="w-full px-1 py-5 bg-white rounded-md shadow-lg ">
          <Flex className="flex-col items-center text-center">
            <BiPhoneCall className="text-4xl text-red-600" />
            <Heading>Call Us</Heading>
            <Text>+256 787 920802</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Contact;
