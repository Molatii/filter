import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const initialProducts = [
  {
    name: "eggs",
    cost: "M3.77",
  },
  {
    name: "milk",
    cost: "M20.00",
  },
  {
    name: "water",
    cost: "M10.00",
  },
];

function Products() {
  const [products] = useState(initialProducts);
  const searchItem = useSelector(
    (mystate: RootState) => mystate.productFilter.item,
  );
  return (
    <Stack alignItems="center" justifyContent="center">
      {products
        .filter((product) =>
          searchItem ? product.name.includes(searchItem) : true,
        )
        .map((product) => (
          <Stack key={product.name} direction="row">
            <Text>{product.name}</Text>
            <Text>{product.cost}</Text>
          </Stack>
        ))}
    </Stack>
  );
}
export default Products;
