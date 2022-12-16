import { Center, Text, Heading, Button, Container} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

function Auction(){
    const auction = useLoaderData()
    return (
      <Container h={"100vh"}>
        <Center flexDirection={"column"}>
          <Heading>{auction.description}</Heading>
          <Text>{auction.lastBid}</Text>
          <Text>{auction.award}</Text>
          <Button> Send a bid </Button>
        </Center>
      </Container>
    );
}


export default Auction;