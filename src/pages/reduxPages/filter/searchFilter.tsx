import { Stack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilterState,
  setFilterItem,
} from "../../../redux/reduxSlices/filterSlice";
import { RootState } from "../../../redux/store";

function Search() {
  const dispatch = useDispatch();
  const searchItem = useSelector(
    (mystate: RootState) => mystate.productFilter.item,
  );
  return (
    <Stack alignItems="center" justifyContent="center">
      <form>
        <Stack direction="row">
          <input
            type="text"
            style={{
              textAlign: "center",
              border: "1px solid",
              borderColor: "blue",
            }}
            value={searchItem}
            placeholder="Filter by Item Name"
            onChange={(e) => dispatch(setFilterItem(e.target.value))}
          />
          <Button
            size="xs"
            bg="yellow.400"
            onClick={() => dispatch(clearFilterState())}
          >
            Clear
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default Search;
