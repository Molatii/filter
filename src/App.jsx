import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Filter from "./pages/reduxPages/filter/userFilter";
import Counter from "./pages/reduxPages/counter/userCounter";
import RTKQUERY from "./pages/reduxPages/UserAuth/userRTKQuery";
import SignINForm from "./pages/reduxPages/UserAuth/login";
import SignUpForm from "./pages/reduxPages/UserAuth/register";
import Home from "./pages/reduxPages/querys/home";
import NewMovie from "./pages/reduxPages/querys/newMovie";
import ZustandHomePage from "./pages/zustandPages/zustandHomePage";
import UserForm from "./pages/zustandPages/userForm";
import ReactQueryHome from "./pages/reactQuery/reactQueryHome";

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
        <Route path="/newmovies" element={<NewMovie />} />
        <Route path="/zustand" element={<ZustandHomePage />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/react-query" element={<ReactQueryHome />} />
      </Routes>
    </Box>
  );
}
export default App;
