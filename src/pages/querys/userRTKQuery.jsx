import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function RTKQUERY() {
  const navigate = useNavigate();
  const goToFilter = () => {
    navigate("/counter");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <Stack
      w="100%"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Text textAlign="center" fontSize="3xl">
        RTK Query
      </Text>
      <Text textAlign="center" pb="35px">
        learn how to user RTK with Axios by login, register and fetching data
      </Text>
      <Stack pb="20px" direction="row" justify="center">
        <Button
          bg="blue.300"
          textColor="white"
          onClick={goToLogin}
          _hover={{ bg: "green.300", color: "white" }}
        >
          Login Now
        </Button>
        <Button
          bg="green.500"
          textColor="white"
          onClick={goToRegister}
          _hover={{ bg: "green.300", color: "white" }}
        >
          Register Now
        </Button>
      </Stack>
      <Button
        bg="red.400"
        textColor="white"
        onClick={goToFilter}
        _hover={{ bg: "gray.300", color: "black" }}
      >
        Prev Page (counter)
      </Button>
    </Stack>
  );
}
export default RTKQUERY;
