import React, { useState } from "react";
import { CartItemStyle, CartInfoStyle } from "../../styles/CartScreen";
import { useDispatch } from "react-redux";
import { updateCartQty, deleteItemFromCart } from "../../actions/cartActions";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(Number(item.qtyInCart));
  const dispatch = useDispatch();

  const handleCartQty = (itemId, qty) => {
    dispatch(updateCartQty(itemId, qty));
  };

  const handleCartDelete = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId));
  };
  return (
    <CartItemStyle>
      <img
        src={item.image}
        alt={item.name}
        style={{ maxWidth: "150px", maxHeight: "150px" }}
      />
      <CartInfoStyle>
        <h3>Title</h3>
        <h4>{item.title}</h4>
      </CartInfoStyle>
      <CartInfoStyle>
        <h3>Price</h3>
        <h4>
          {item.price}{" "}
          <span style={{ fontWeight: 600, marginRight: "2px" }}>$</span>
        </h4>
      </CartInfoStyle>
      <CartInfoStyle>
        <h3>Qty In Cart</h3>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => {
            setQty((prev) => Number(e.target.value));
            handleCartQty(item.id, Number(e.target.value));
          }}
        />
      </CartInfoStyle>

      <button className="btn btn-info" onClick={() => window.location.reload()}>
        Update
      </button>

      <button
        className="btn btn-danger"
        onClick={() => handleCartDelete(item.id)}
      >
        Delete
      </button>
    </CartItemStyle>
  );
};

export default CartItem;
