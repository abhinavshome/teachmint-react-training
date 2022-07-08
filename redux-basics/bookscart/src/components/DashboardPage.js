import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h3>Dashboard</h3>
    </div>
  );
};

export default DashboardPage;
