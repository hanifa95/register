import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("user") !== null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/entrance";
    }
  }, [isLoggedIn]);

  const LogOut = () => {
    localStorage.removeItem("user");
    navigate("/entrance");
    // window.location.href = '/login';
  };

  return (
    <div className="container-fluid detail">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 mt-5">
          <h1 className="text-secondary pt-3">Detail</h1>
          {isLoggedIn ? (
            <div className=" pt-3 ">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>

              <button className="btn btn-secondary col-3 mt-3" onClick={LogOut}>
                Logout
              </button>
            </div>
          ) : (
            <p>Not logged in</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Detail;
