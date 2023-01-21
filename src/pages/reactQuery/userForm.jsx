import { Box, Text, Button, FormLabel, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../reactQuery_Services/usersApi";

// eslint-disable-next-line react/prop-types
export default function UserForm({ userDetails, setIsEditing }) {
  const [fields, setFields] = useState({ ...userDetails });

  // queryClient acts like global store e.g get chached data etc...
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      // trigger to update or get update data from DB
      // eslint-disable-next-line react/prop-types
      queryClient.invalidateQueries(["userDetails", userDetails.id], data);
      setIsEditing(false);
    },
  });

  if (isLoading) {
    return "Wait.......updating changes";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(fields);
    mutate(fields);
  };
  return (
    <Box bg="gray.100">
      <Text>User update</Text>
      <form onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <input
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
        />
        <FormLabel>Details</FormLabel>
        <Textarea
          name="details"
          type="text"
          value={fields.details}
          onChange={handleChange}
        />
        <Button bg="teal.400">Save</Button>
      </form>
    </Box>
  );
}
