import { Box, Text, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import * as api from "../../reactQuery_Services/usersApi";
import UserForm from "./userForm";

// eslint-disable-next-line react/prop-types
export default function UserDetails({ userId }) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    data: userDetails,
    isLoading,
    error,
    isError,
    isFetching,
  } = useQuery(["user", userId], () => api.getUser(userId), {
    retry: false,
    enabled: Boolean(userId),
  });

  if (isLoading) {
    return "Loading....2";
  }
  if (isFetching) {
    return "Fetching....2";
  }
  if (isError) {
    return `Something went wrong 2...........${error.message}`;
  }
  if (!userId) {
    return "Note!...User not selected";
  }
  return (
    <Box>
      {isEditing ? (
        <UserForm userDetails={userDetails} setIsEditing={setIsEditing} />
      ) : (
        <Stack>
          <Text
            textAlign="center"
            fontSize="3xl"
            pt="23px"
            pb="20px"
            color="teal.600"
          >
            User Details {isFetching && "Background refreshing"}
          </Text>
          <Text textAlign="center">{userDetails.name}</Text>
          <Text textAlign="center">{userDetails.content}</Text>
        </Stack>
      )}

      <Button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Chancel" : "Edit"}
      </Button>
    </Box>
  );
}
