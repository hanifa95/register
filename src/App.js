import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Registration from "./pages/registration";
import Entrance from "./pages/entrance";
import Detail from "./pages/detail";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="registration" element={<Registration/>}></Route>
          <Route path="entrance" element={<Entrance/>}></Route>
          <Route path="detail" element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
