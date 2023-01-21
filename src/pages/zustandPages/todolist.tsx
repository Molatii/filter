import { Stack, Button } from "@chakra-ui/react";
import { useEffect } from "react";
// eslint-disable-next-line import/no-named-as-default
import useStore from "../../zustandStore/ZuStore";

function TodoList() {
  const store = useStore();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json",
    )
      .then((response) => response.json())
      .then((data) => store.LoadAPIData(data));
  }, [store]);
  return (
    <Stack align="center">
      <form>
        <input
          type="text"
          placeholder="Enter New Todo here"
          value={store.newTodo}
          style={{
            textAlign: "center",
            border: "1px solid",
            borderColor: "teal",
          }}
          onChange={(e) => store.setNewTodo(e.target.value)}
        />
      </form>
      <Button
        bg="green.500"
        color="white"
        _hover={{ bg: "green.300", color: "white" }}
        onClick={() => store.addTodo()}
      >
        Add Todo
      </Button>
      <>
        {store.todos.map((todo) => (
          <Stack alignContent="center" key={todo.id} direction="row">
            <input
              onChange={(e) => store.updateTodo(todo.id, e.target.value)}
              value={todo.text}
              style={{
                textAlign: "center",
                border: "1px solid",
                borderColor: "white",
                backgroundColor: "lightgray",
              }}
            />
            <Button
              size="xs"
              bg="yellow.400"
              onClick={() => store.deteleTodo(todo.id)}
            >
              Delete
            </Button>
          </Stack>
        ))}
      </>
    </Stack>
  );
}
export default TodoList;
