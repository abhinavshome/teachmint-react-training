import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../api";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const order = async () => {
    try {
      const res = await placeOrder(cart);
      console.log(res);
      dispatch({ type: "ALERT_SUCCESS", payload: res.data.message });
    } catch (err) {
      dispatch({ type: "ALERT_ERROR", payload: err.response.data.message });
    }
  };

  return (
    <div>
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
          {cart.items.map((item) => (
            <tr>
              <td>{item.itemId}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total Price:</td>
            <td>{cart.totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={order}>place order</button>
    </div>
  );
};

export default CartPage;
