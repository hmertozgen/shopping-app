import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
import { products } from "../constants/products";

export const listProducts = () => async (dispatch) => {
  const productsData = [];
  // dispatch({});
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productsData });

    products.forEach((product) => {
      productsData.push(product);
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
