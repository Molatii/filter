import { Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

function Calcullate() {
  const count = useSelector((mystate: RootState) => mystate.count.value);

  return (
    <Stack pb="40px" justifyContent="center" alignItems="center">
      <Text
        display="none"
        mt="25px"
        fontWeight="bold"
        fontSize="2xl"
        textAlign="center"
      >
        Number Multipled by 2: {count * 2}
      </Text>
      <Text
        mt="25px"
        pb="20px"
        fontWeight="bold"
        fontSize="2xl"
        textAlign="center"
      >
        State Number: {count}
      </Text>
    </Stack>
  );
}
export default Calcullate;
