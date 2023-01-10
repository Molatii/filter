import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Filter from "./pages/filter/userFilter";
import Counter from "./pages/counter/userCounter";
import RTKQUERY from "./pages/querys/userRTKQuery";
import SignINForm from "./pages/querys/login";
import SignUpForm from "./pages/querys/register";
import Home from "./pages/querys/home";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/rtk_query" element={<RTKQUERY />} />
        <Route path="/login" element={<SignINForm />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Box>
  );
}
export default App;
