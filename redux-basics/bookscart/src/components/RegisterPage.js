import { useNavigate } from "react-router-dom";
import { register } from "../api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = Object.fromEntries(data.entries());
    console.log(user);
    const res = await register(user);
    console.log(res);
    navigate("/login");
  };
  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
