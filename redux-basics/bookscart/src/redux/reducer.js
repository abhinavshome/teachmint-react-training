import produce from "immer";

const INITIAL_STATE = {
  alert: {
    type: "",
    message: "",
  },
  books: [],
  orders: [],
  cart: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  },
  loggedIn: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  return produce(state, (newState) => {
    switch (action.type) {
      case "LOAD_BOOKS":
        newState.books = action.payload;
        break;
      case "LOAD_ORDERS":
        newState.orders = action.payload;
        break;
      case "ADD_TO_CART":
        const book = action.payload;
        let itemInCart = newState.cart.items.find((i) => i.itemId === book.id);
        if (itemInCart) {
          itemInCart.qty++;
        } else {
          itemInCart = {
            itemId: book.id,
            name: book.title,
            qty: 1,
            price: book.price,
          };
          newState.cart.items.push(itemInCart);
        }
        newState.cart.totalItems++;
        newState.cart.totalPrice += book.price;
        break;
      case "ALERT_SUCCESS":
        newState.alert.type = "success";
        newState.alert.message = action.payload;
        break;
      case "ALERT_ERROR":
        newState.alert.type = "error";
        newState.alert.message = action.payload;
        break;
      case "CLEAR_ALERT":
        newState.alert.type = null;
        newState.alert.message = null;
        break;
      case "LOGIN":
        newState.loggedIn = true;
        break;
      case "LOGOUT":
        newState.loggedIn = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
