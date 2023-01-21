import { Stack, Text } from "@chakra-ui/react";
import { UserNumberStore } from "../../zustandStore/ZuStore";

function MyValue() {
  const readUserNumber = UserNumberStore((state) => state.userNumber);
  return (
    <Stack mt="15px" mb="15px" alignItems="center">
      <Text>{readUserNumber} is my value</Text>
    </Stack>
  );
}
export default MyValue;
