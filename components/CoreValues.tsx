import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { BsFillKeyFill, BsFillShieldFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";

function CoreValues() {
  return (
    <Box
      id="values"
      className="bg-gray-900 text-white lg:min-h-[80vh] justify-center items-center flex flex-col"
    >
      <Heading as="h1" className="text-center title">
        Core Values
      </Heading>

      <Grid className="w-full grid-cols-1 lg:grid-cols-2 lg:px-30">
        <GridItem className="px-5 py-3 mx-2 my-2 bg-gray-800 rounded-md">
          <Flex className="space-x-3">
            <FiUsers className="text-6xl text-red-600 lg:text-4xl" />
            <Box className="flex flex-col text-left">
              <Heading size="lg" className="font-semibold">
                Client Centric
              </Heading>
              <Text>
                At BGB Financial, the client comes first. Our primary focus is
                to provide personalized and creative solutions for individual
                needs.
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem className="px-5 py-3 mx-2 my-2 bg-gray-800 rounded-md">
          <Flex className="space-x-3">
            <BsFillShieldFill className="text-6xl text-red-600 lg:text-4xl" />
            <Box className="flex flex-col text-left">
              <Heading size="lg" className="font-semibold">
                Trust and Integrity
              </Heading>
              <Text>
                Since we expect our client relationships to be long-term, it is
                paramount that they be based on trust and integrity. In turn,
                these ideals influence all the decisions of the firm.
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem className="px-5 py-3 mx-2 my-2 bg-gray-800 rounded-md">
          <Flex className="space-x-3">
            <FaCrown className="text-6xl text-red-600 lg:text-4xl" />
            <Box className="flex flex-col text-left">
              <Heading size="lg" className="font-semibold">
                Excellence
              </Heading>
              <Text>
                We strive for excellence in all aspects of our business. Our
                clients have come to expect and appreciate the quality,
                attentiveness and professionalism of our services.
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem className="px-5 py-3 mx-2 my-2 bg-gray-800 rounded-md">
          <Flex className="space-x-3">
            <BsFillKeyFill className="text-6xl text-red-600 lg:text-4xl" />
            <Box className="flex flex-col text-left">
              <Heading size="lg" className="font-semibold">
                Accountability
              </Heading>
              <Text>
                Open, transparent and honest communication is a hallmark of our
                firm. We work to keep our clients updated and informed.
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CoreValues;
