import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";

import auctions from "../data";
import { injected } from "../provider";

const AuctionCard = ({ auction }) => (
  <Card w="100%">
    <CardHeader>
      <Link to={`/auction/${auction.id}`}>
        <Heading textAlign={"center"}>
          {auction.id} - {auction.award}
        </Heading>
      </Link>
    </CardHeader>
    <CardBody>
      <Text align={"center"}>{auction.id}</Text>
      <Text align={"center"}>{auction.description}</Text>
      <Text align={"center"}>{auction.award}</Text>
      <Text align={"center"}>{auction.lastBid}</Text>
    </CardBody>
  </Card>
);

function Root() {
  async function connect() {
  }

  return (
    <Container maxW="6xl">
      <Button>Create auction</Button>
      <Button onClick={connect}>Connect metamask</Button>
      <Box>
        <SimpleGrid minChildWidth="420px" columns={3} spacing={4}>
          {auctions.map(
            (auction, index) =>
              auction.active && <AuctionCard key={index} auction={auction} />
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default Root;
