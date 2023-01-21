import { Stack, Button } from "@chakra-ui/react";
import { UserNumberStore } from "../../zustandStore/ZuStore";

function AddButton() {
  const incrementNumber = UserNumberStore((state) => state.increase);
  const resetNumber = UserNumberStore((state) => state.restart);
  return (
    <Stack
      justifyContent="center"
      mt="15px"
      alignItems="center"
      direction="row"
    >
      <Button
        bg="blue.500"
        textColor="white"
        onClick={incrementNumber}
        _hover={{ bg: "green.300", color: "white" }}
      >
        Plus one
      </Button>
      <Button
        bg="red.500"
        textColor="white"
        onClick={resetNumber}
        _hover={{ bg: "blue.300", color: "white" }}
      >
        Reset State
      </Button>
    </Stack>
  );
}
export default AddButton;
