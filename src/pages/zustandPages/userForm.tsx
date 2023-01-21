import { FormLabel, Stack, Text, Box } from "@chakra-ui/react";
import { UsersStore } from "../../zustandStore/ZuStore";

function UserForm() {
  const [firstName, updateFirstName, lastName, updatelastName] = UsersStore(
    (state) => [
      state.firstName,
      state.updateFirstName,
      state.lastName,
      state.updateLastName,
    ],
  );

  return (
    <Box alignContent="center">
      <Stack
        bg="gray.100"
        w="50%"
        align="center"
        p="5"
        mt="45px"
        alignSelf="center"
      >
        <FormLabel>First Name</FormLabel>
        <input onChange={(e) => updateFirstName(e.currentTarget.value)} />
        <FormLabel>Second Name</FormLabel>
        <input onChange={(e) => updatelastName(e.currentTarget.value)} />
        <Text>First Name: {firstName}</Text>
        <Text>Second Name: {lastName}</Text>
      </Stack>
    </Box>
  );
}

export default UserForm;
