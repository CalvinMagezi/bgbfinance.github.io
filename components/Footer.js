import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";

function Footer() {
  return (
    <Box className="w-full text-white bg-gray-900">
      <Grid className="grid-cols-1 gap-3 px-5 py-5 md:grid-cols-2 lg:grid-cols-4 lg:py-10 lg:px-20">
        <GridItem>
          <Flex className="flex-col">
            <Heading as="h1">
              BGB<span className="text-red-600">.</span>
            </Heading>
            <Text>Simba Towers</Text>
            <Text>Plot 22 John Babiha (Acacia) Ave</Text>
            <Text>Kampala, Uganda</Text>
            <br />
            <Text>
              <strong>Phone:</strong>{" "}
              <a href="tel:+256787920802">+256 787 920802</a>
            </Text>
            <Text>
              <strong>Email:</strong>{" "}
              <a href="mailto:gbitature@gmail.com">gbitature@gmail.com</a>
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Heading as="h2">Useful Links</Heading>
          <Link href="/" className="flex items-center space-x-3">
            <AiFillCaretRight /> Home
          </Link>
          <Link href="/#about" className="flex items-center space-x-3">
            <AiFillCaretRight /> About us
          </Link>
          <Link href="/#services" className="flex items-center space-x-3">
            <AiFillCaretRight /> Services
          </Link>
          <Link href="/#values" className="flex items-center space-x-3">
            <AiFillCaretRight /> Core Values
          </Link>
        </GridItem>
        <GridItem>
          <Heading as="h2">Our Services</Heading>
          <Link href="/#services" className="flex items-center space-x-3">
            <AiFillCaretRight />
            Financial Book Keeping
          </Link>
          <Link href="/#services" className="flex items-center space-x-3">
            <AiFillCaretRight />
            Business Brokerage
          </Link>
          <Link href="/#services" className="flex items-center space-x-3">
            <AiFillCaretRight /> Expense Reduction
          </Link>
          <Link href="/#services" className="flex items-center space-x-3">
            <AiFillCaretRight /> Peer to peer lending (micro-finance)
          </Link>
        </GridItem>
        <GridItem className="relative rounded-md">
          <Image
            src="/img/logo.jpeg"
            className="rounded-md"
            layout="fill"
            objectFit="contain"
          />
        </GridItem>
      </Grid>
      <Text className="px-10 py-2 bg-black lg:px-20">
        Copyright <strong>bgbfinancial.net</strong> All Rights Reserved
      </Text>
    </Box>
  );
}

export default Footer;
