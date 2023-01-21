import { Box, Text, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AddButton from "./addButton";
import MyValue from "./displayValue";
import TodoList from "./todolist";

function ZustandHomePage() {
  const navigate = useNavigate();
  const usersFrom = () => {
    navigate("/userform");
  };
  return (
    <Box alignItems="center" alignContent="center">
      <Text textAlign="center" mt="2%" fontSize="2xl">
        Zustand HomePage
      </Text>
      <AddButton />
      <MyValue />
      <Stack alignItems="center">
        <Text fontSize="lg" color="teal.500" fontWeight="bold">
          Learn more with todo list (update with onChange)
        </Text>
        <TodoList />
      </Stack>
      <Stack alignItems="center">
        <Text mt="30px" fontSize="lg" color="red.500" fontWeight="bold">
          Learn more useer login and registration
        </Text>
        <Button
          bg="teal.500"
          textColor="white"
          onClick={usersFrom}
          _hover={{ bg: "blue.300", color: "white" }}
        >
          Try user form
        </Button>
      </Stack>
    </Box>
  );
}
export default ZustandHomePage;
