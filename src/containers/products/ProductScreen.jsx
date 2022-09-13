import React, { useEffect } from "react";
import ProductItem from "../../components/product/ProductItem";
// import { products } from "../../constants/products";
import { useDispatch, useSelector } from "react-redux";
import { PageHeading, ProductContainerStyle } from "../../styles/ProductScreen";
import { listProducts } from "../../actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.productsList);

  const { loading, error, products } = productsList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <PageHeading primary>Products</PageHeading>
          <ProductContainerStyle primary>
            {products.map((item) => (
              <ProductItem item={item} />
            ))}
          </ProductContainerStyle>
        </>
      )}
    </>
  );
};

export default ProductScreen;
