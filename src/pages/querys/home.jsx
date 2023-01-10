/* eslint-disable no-nested-ternary */
import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGetFilmsQuery } from "../../redux/reduxSlices/apiSlice";

function Home() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
  };

  const responseFromQuery = useGetFilmsQuery();
  const { data, isLoading, error } = responseFromQuery;
  // eslint-disable-next-line no-console
  console.log(responseFromQuery);

  return (
    <Stack
      w="100%"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Text textAlign="center" fontSize="3xl">
        Home
      </Text>
      <Button
        bg="blue.300"
        textColor="white"
        onClick={logOut}
        mb="26px"
        _hover={{ bg: "green.300", color: "white" }}
      >
        Log Out
      </Button>
      <Stack justify="center" justifyContent="center">
        <Text>Star Wars Movies</Text>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <Stack>
            {data.results.map((movie) => (
              <section item key={movie.episode_id} xs={4}>
                <h2>{movie.title}</h2>
                <p>{movie.opening_crawl}</p>
              </section>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
}
export default Home;
