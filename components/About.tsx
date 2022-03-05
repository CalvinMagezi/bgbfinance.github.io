import { BsEyeFill, BsFillBriefcaseFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";

function About() {
  return (
    <Grid
      id="about"
      className="w-full min-h-[80vh] justify-center items-center grid-cols-1 lg:grid-cols-2 bg-gray-900 "
    >
      <Box className="px-5 py-10 lg:px-20">
        <Heading as="h1" className="title">
          About Us
        </Heading>
        <Text className="text-gray-400">
          BGB Financial is a privately managed financial services firm in the
          East African region that offers solutions tailored to the needs of its
          clients by capitalizing on the individual ingenuity of its staff and
          synergies through partnerships to deliver world class value.
        </Text>
      </Box>
      <Grid className="grid-cols-1 gap-2 py-5 md:grid-cols-2">
        <GridItem className="px-5">
          <BsFillBriefcaseFill className="text-4xl text-red-600" />
          <Heading as="h1" className="subtitle">
            Our Mission
          </Heading>
          <Text className="text-gray-400">
            To provide comprehensive financial services with a commitment to
            enhance local growth and development.
          </Text>
        </GridItem>
        <GridItem className="px-5">
          <BsEyeFill className="text-4xl text-red-600" />
          <Heading as="h1" className="subtitle">
            Our Vision
          </Heading>
          <Text className="text-gray-400">
            To create financial freedom for individuals in the African region
            through providing flexible solutions to their financial problems.
          </Text>
        </GridItem>
        <GridItem className="px-5">
          <FiTarget className="text-4xl text-red-600" />
          <Heading as="h1" className="subtitle">
            Our Objective
          </Heading>
          <Text className="text-gray-400">
            To formalize and encourage keeping meticulous financial records to
            enable SME’s acquire credit and make more efficient financial
            decisions.
          </Text>
        </GridItem>
      </Grid>
    </Grid>
  );
}

export default About;
