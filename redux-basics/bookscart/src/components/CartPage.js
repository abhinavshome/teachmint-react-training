import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

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
    </div>
  );
};

export default CartPage;
