import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Calcullate from "./calculate";
import Input from "./input";

function Counter() {
  const navigate = useNavigate();
  const goToFilter = () => {
    navigate("/");
  };
  const goToRTK = () => {
    navigate("/rtk_query");
  };
  return (
    <Stack
      w="100%"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Text textAlign="center" fontSize="3xl">
        Learn Redux
      </Text>
      <Input />
      <Calcullate />
      <Stack direction="row">
        <Button
          bg="blue.300"
          textColor="white"
          onClick={goToFilter}
          _hover={{ bg: "green.300", color: "white" }}
        >
          Prev Page (Filter)
        </Button>
        <Button
          bg="green.500"
          textColor="white"
          onClick={goToRTK}
          _hover={{ bg: "green.300", color: "white" }}
        >
          Next Page (Redux RTK Query)
        </Button>
      </Stack>
    </Stack>
  );
}
export default Counter;
