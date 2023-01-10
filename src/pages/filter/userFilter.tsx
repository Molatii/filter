import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Products from "./products";
import Search from "./searchFilter";

function Filter() {
  const navigate = useNavigate();
  const goToCounter = () => {
    navigate("/counter");
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
      <Button
        bg="green.500"
        textColor="white"
        _hover={{ bg: "green.300", color: "white" }}
        onClick={goToCounter}
      >
        Next Page (Counter)
      </Button>
    </Stack>
  );
}
export default Filter;
