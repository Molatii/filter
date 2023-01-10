import { Stack, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setCount,
} from "../../redux/reduxSlices/countSlice";

function Input() {
  const dispatch = useDispatch();
  return (
    <Stack alignItems="center" justifyContent="center">
      <form>
        <input
          type="number"
          style={{
            textAlign: "center",
            border: "1px solid",
            borderColor: "blue",
          }}
          placeholder="Enter Number here"
          onChange={(e) => dispatch(setCount(e.target.valueAsNumber))}
        />
      </form>
      <Stack direction="column">
        <Button
          size="sm"
          bg="red.400"
          mt="20px"
          onClick={() => dispatch(decrement())}
        >
          decrement by 2
        </Button>
        <Button size="sm" bg="teal.300" onClick={() => dispatch(increment())}>
          Increment by 2
        </Button>
      </Stack>
    </Stack>
  );
}
export default Input;
