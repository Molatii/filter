import { Stack, Text, FormLabel, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAddNewMovieMutation } from "../../../redux/reduxSlices/apiSlice";

function NewMovie() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [movieId, setMovieId] = useState("");
  const [addNewMovie, { isLoading }] = useAddNewMovieMutation();

  const canSave = [title, content, movieId].every(Boolean) && !isLoading;
  const addNewMovieNow = async () => {
    if (canSave) {
      try {
        await addNewMovie({ title, content, movieId }).unwrap();
        setTitle("");
        setContent("");
        setMovieId("");
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to save New Movie: ", err);
      }
    }
  };
  return (
    <Stack align="center">
      <Text pb="px" textAlign="center" fontSize="3xl">
        Add new movie section
      </Text>
      <form>
        <FormLabel>
          Title:
          <input
            type="text"
            value={title}
            style={{
              textAlign: "left",
              border: "1px solid",
              borderColor: "blue",
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Content:
          <input
            type="text"
            value={content}
            style={{
              textAlign: "left",
              border: "1px solid",
              borderColor: "blue",
            }}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Movie Id:
          <input
            type="text"
            value={movieId}
            style={{
              textAlign: "left",
              border: "1px solid",
              borderColor: "blue",
            }}
            onChange={(e) => setMovieId(e.target.value)}
          />
        </FormLabel>
      </form>
      <Button
        bg="green.500"
        color="white"
        _hover={{ bg: "green.300", color: "white" }}
        onClick={addNewMovieNow}
      >
        Add New Movie
      </Button>
      <Link _hover={{ color: "blue" }} id="mvs" to="/home">
        List of movies
      </Link>
    </Stack>
  );
}
export default NewMovie;
