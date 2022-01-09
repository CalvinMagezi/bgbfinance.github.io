import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { serviceState } from "../atoms/serviceStateAtom";

function Services() {
  const [service, setService] = useRecoilState(serviceState);
  return (
    <Box id="services" className="w-full">
      <div className="w-full text-center">
        <h1 className="py-3 text-4xl font-semibold">Services</h1>
        <hr className="w-full text-gray-600" />
      </div>
      <Grid className="items-center w-full grid-cols-2 gap-3 px-3 text-center lg:grid-cols-4 justify-evenly">
        <GridItem
          onClick={() => setService(1)}
          className={`${
            service === 1
              ? "bg-red-600 text-white"
              : "bg-white text-black border border-black"
          } py-5 px-8 my-4 font-semibold text-md lg:text-lg cursor-pointer`}
        >
          Financial Book Keeping
        </GridItem>

        <GridItem
          onClick={() => setService(2)}
          className={`${
            service === 2
              ? "bg-red-600 text-white"
              : "bg-white text-black border border-black"
          } py-5 px-8 my-4 font-semibold text-md lg:text-lg cursor-pointer`}
        >
          Business Brokerage
        </GridItem>

        <GridItem
          onClick={() => setService(3)}
          className={`${
            service === 3
              ? "bg-red-600 text-white"
              : "bg-white text-black border border-black"
          } py-5 px-8 my-4 font-semibold text-md lg:text-lg cursor-pointer`}
        >
          Expense Reduction
        </GridItem>

        <GridItem
          onClick={() => setService(4)}
          className={`${
            service === 4
              ? "bg-red-600 text-white"
              : "bg-white text-black border border-black"
          } py-5 px-8 my-4 font-semibold text-md lg:text-lg cursor-pointer`}
        >
          Peer to peer lending (micro-financing)
        </GridItem>
      </Grid>

      {service === 1 && (
        <Grid
          h="500px"
          className="items-center w-full grid-cols-1 px-5 lg:grid-cols-2 lg:px-20"
        >
          <GridItem>
            <Heading as="h1" size="lg" className="pb-5 text-center">
              Financial Book Keeping
            </Heading>
            <Text>
              BGB Financial offers bookkeeping services that invloves tracking
              and recording their clients accounting activities. Our services
              include invoicing, payments, and ensuring financial records are
              up-to-date. Our aim is to offer small business owners managerial
              control while we handle the daily accounting tasks. BGB also
              offers the following services: Accounting, tax consultants,
              financial statements, business plans, payroll services, business
              valuation, investment advice and workers compensation.
            </Text>
          </GridItem>
          <GridItem className="relative hidden lg:inline-flex">
            <Image src="/img/accounting-cycle.png" width="500" height="500" />
          </GridItem>
        </Grid>
      )}

      {service === 2 && (
        <Grid
          h="500px"
          className="items-center w-full grid-cols-1 px-5 lg:grid-cols-2 lg:px-20"
        >
          <GridItem>
            <Heading as="h1" size="lg" className="pb-5 text-center">
              Business Brokerage
            </Heading>
            <Text>
              BGB financial brokers the sale of both business and franchises and
              offers to list their client's business on accessible platforms. We
              pre-screen all prospective buyers and require them to sign a
              confidentiality. In addition to our brokerage services, BGB also
              offers development of marketing plans, preparation and submission
              of advertising, assisting buyers and sellers with transferring of
              licenses and utilities, among others. We also list our client's
              business on numerous prominent international websites to ensure we
              find the best buyer for our clients.
            </Text>
          </GridItem>
          <GridItem className="relative hidden lg:inline-flex">
            <Image src="/img/bbroker.jpeg" width="700" height="500" />
          </GridItem>
        </Grid>
      )}

      {service === 3 && (
        <Grid
          h="500px"
          className="items-center w-full grid-cols-1 px-5 lg:grid-cols-2 lg:px-20"
        >
          <GridItem>
            <Heading as="h1" size="lg" className="pb-5 text-center">
              Expense Reduction
            </Heading>
            <Text>
              BGB Financial is a specialist in cost and supplier management
              consultancy. We focus on delivering management consultancy. We
              focus on delivering improved business performance to clients of
              all sizes in the private and public sector. In addition to our
              expense reduction analyst consultancy services, we also offer
              industry expertise in a wide variety of expense categories such as
              logistics, facility management, corporate and personnel services,
              banking and financial services, along with telecommunications and
              information technology.
            </Text>
          </GridItem>
          <GridItem className="relative hidden lg:inline-flex">
            <Image src="/img/expense.jpeg" width="700" height="500" />
          </GridItem>
        </Grid>
      )}

      {service === 4 && (
        <Grid
          h="500px"
          className="items-center w-full grid-cols-1 px-5 lg:grid-cols-2 lg:px-20"
        >
          <GridItem>
            <Heading as="h1" size="lg" className="pb-5 text-center">
              Peer to peer lending (Micro-finance)
            </Heading>
            <Text>
              BGB Financial offers a flexible marketplace that enables borrowers
              to access affordable debt capital and investors to access new
              asset classes. BGB is a micro credit provider and aims to remove
              traditional costs and barriers for borrowers and investors through
              innovative technology, designed to create a transparent and fair
              marketplace. BGB Financial offers lower costs compared to
              traditional bank loan programmes. We pass the savings onto
              borrowers in the form of attractive risk-adjusted returns.
            </Text>
          </GridItem>
          <GridItem className="relative hidden lg:inline-flex">
            <Image src="/img/peer.jpeg" width="700" height="500" />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default Services;
