import React, { useEffect } from "react";
import CartItem from "../../components/cart/CartItem";

import { CartContainerStyle, PageHeading } from "../../styles/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartItemsList = useSelector((state) => state.cartItemsList);

  const { loading, error, cartItems } = cartItemsList;

  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qtyInCart * item.price,
    0
  );
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <PageHeading>Cart</PageHeading>
          {cartItems.length === 0 ? (
            <div className="text-center">No items in cart</div>
          ) : (
            <div className="w-100">
              <CartContainerStyle>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <div className="ms-4">
                  <h3>Total Price: ${totalPrice}</h3>

                  <button className="btn btn-success mb-3  w-25">BUY</button>
                </div>
              </CartContainerStyle>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartScreen;
