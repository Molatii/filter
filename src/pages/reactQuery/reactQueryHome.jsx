import { Box, Text, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import UserDetails from "./userDetails";
import Users from "./users";

export default function ReactQueryHome() {
  // selected user id, or we can use redux toolkit, zustand to achieve this but for now......
  const [userId, setUserId] = useState();
  // try new query get dogs images
  const { data, isLoading, isError, error } = useQuery("dog", () =>
    axios("https://random.dog/woof.json"),
  );

  if (isLoading) {
    return "Loading....Image";
  }
  if (isError) {
    return `Something went wrong while Fetching Img...........${error}`;
  }

  return (
    <Box alignItems="center" justifyContent="center">
      <Text
        textAlign="center"
        fontSize="3xl"
        pt="23px"
        pb="10px"
        color="teal.600"
      >
        React Query
      </Text>
      <Stack alignItems="center">
        <img src={data.data.url} alt="random_img" width="150px" height="90px" />
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Stack>
          <Text textAlign="center">Selected User Id: {userId}</Text>
          <Users setUserId={setUserId} />
        </Stack>
        <Stack>
          <UserDetails userId={userId} />
        </Stack>
      </Stack>
    </Box>
  );
}
