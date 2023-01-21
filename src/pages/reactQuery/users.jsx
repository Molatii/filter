import { Box, Text, Button } from "@chakra-ui/react";
import { useQuery } from "react-query";
import * as api from "../../reactQuery_Services/usersApi";

// eslint-disable-next-line react/prop-types
export default function Users({ setUserId }) {
  const { data, isLoading, isFetching, isError, error } = useQuery(
    "users",
    api.getUsers,
    { retry: false },
  );

  if (isLoading) {
    return "Loading....";
  }
  if (isFetching) {
    return "Fetching....";
  }
  if (isError) {
    return `Something went wrong...........${error.message}`;
  }
  return (
    <Box alignItems="center" justifyContent="center">
      <Text>
        {data?.map((user) => (
          <Text key={user.id}>
            {user.name}
            <Button onClick={() => setUserId(user.id)}>
              View User details
            </Button>
          </Text>
        ))}
      </Text>
    </Box>
  );
}
