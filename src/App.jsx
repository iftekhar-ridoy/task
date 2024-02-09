import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import "./App.css";
import UserDetails from "./pages/userDetails/UserDetails";
import Add from "./pages/add";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Users/>} />
      <Route path="/:id" element={<UserDetails/>} />
      <Route path="/add" element={<Add/>} />
    </Routes>
  )
}

export default App
