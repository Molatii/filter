import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/filter/userFilter";

test("renders Layout Child Plans component in the Layout Document", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const PlansTitle = screen.getByText(/Layout/i);
  expect(PlansTitle).toBeInTheDocument();
});
