/* eslint-disable no-nested-ternary */
import { Stack, Text } from "@chakra-ui/react";
import { useGetFilmByIdQuery } from "../../../redux/reduxSlices/apiSlice";

function QueryById() {
  const movieId = "4";
  const responseFromQueryById = useGetFilmByIdQuery(movieId);
  const { data: singleProduct, isLoading, error } = responseFromQueryById;

  return (
    <Stack>
      <Text>Get by Id</Text>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : singleProduct ? (
        <Stack>
          {singleProduct.results.map((movie) => (
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
