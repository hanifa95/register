import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = () => localStorage.getItem("user") !== null;
  const navigate = useNavigate();

  const SignIn = async () => {
    const response = await axios({
      method: "get",
      url: "https://6953a084a319a928023c1129.mockapi.io/users",
    });
    console.log(response.data);
    if (response.status == 200) {
      const user = response.data.find(
        (user) => user.email == login && user.password == password
      );
      if (user) {
        alert("User logged in successfully");
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/profile");
      } else {
        alert("User not found");
      }
    }
  };
  useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = "/profile";
    }
  }, [isLoggedIn]);

  return (
    <div className="login">
      <h1 className="text-center text-light pt-3 pb-3">Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setLogin(e.target.value)}
        className="form-control"
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <br />
      <div className="text-center">
        <button className="btn btn-success col-5 mt-3" onClick={SignIn}>
          {" "}
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Login;