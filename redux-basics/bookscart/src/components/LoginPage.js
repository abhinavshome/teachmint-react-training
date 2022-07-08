import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = Object.fromEntries(data.entries());
    console.log(user);
    try {
      const res = await login(user);
      console.log(res);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "LOGIN" });
      dispatch({
        type: "ALERT_SUCCESS",
        payload: "Logged in successfully",
      });
      navigate("/");
    } catch (err) {
      dispatch({
        type: "ALERT_ERROR",
        payload: "Invlaid username or password",
      });
    }
  };
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
