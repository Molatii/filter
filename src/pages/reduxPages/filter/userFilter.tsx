import { Stack, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Products from "./products";
import Search from "./searchFilter";

function Filter() {
  const navigate = useNavigate();
  const goToCounter = () => {
    navigate("/counter");
  };
  const zu = () => {
    navigate("/zustand");
  };
  const rQuery = () => {
    navigate("/react-query");
  };
  return (
    <Stack
      w="100%"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Text textAlign="center" fontSize="3xl">
        Redux Filter state data
      </Text>
      <Search />
      <Products />
      <VStack>
        <Button
          bg="green.500"
          textColor="white"
          _hover={{ bg: "green.300", color: "white" }}
          onClick={goToCounter}
        >
          Next Page (Counter)
        </Button>
        <Text textAlign="center" fontSize="3xl" pt="23px" pb="10px">
          Learn Zustand
        </Text>
        <Button
          bg="blue.500"
          textColor="white"
          _hover={{ bg: "green.300", color: "white" }}
          onClick={zu}
        >
          Move to Zustand
        </Button>
        <Text textAlign="center" fontSize="3xl" pt="23px" pb="10px">
          Learn React query
        </Text>
        <Button
          bg="teal.400"
          textColor="white"
          _hover={{ bg: "green.300", color: "white" }}
          onClick={rQuery}
        >
          Move to React query
        </Button>
      </VStack>
    </Stack>
  );
}
export default Filter;
