import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/signUp";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
