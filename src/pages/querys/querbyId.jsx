/* eslint-disable no-nested-ternary */
import { Stack, Text } from "@chakra-ui/react";
import { useGetFilmByIdQuery } from "../../redux/reduxSlices/apiSlice";

function QueryById() {
  const responseFromQueryById = useGetFilmByIdQuery("4");
  const { data, isLoading, error } = responseFromQueryById;

  return (
    <Stack>
      <Text>Get by Id</Text>
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
  );
}
export default QueryById;
