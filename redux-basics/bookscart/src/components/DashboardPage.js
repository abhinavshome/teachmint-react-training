import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../api";

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    console.log("called");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      fetchOrders().then(
        (res) => dispatch({ type: "LOAD_ORDERS", payload: res.data }),
        (err) => console.log(err)
      );
    }
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <h6>My Orders</h6>
      {orders.map((order) => (
        <>
          <div>Order ID: {order.id}</div>
          <table>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {order.details.items.map((item) => (
                <tr>
                  <td>{item.itemId}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}>Total Price:</td>
                <td>{order.details.totalPrice}</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </>
      ))}
    </div>
  );
};

export default DashboardPage;
