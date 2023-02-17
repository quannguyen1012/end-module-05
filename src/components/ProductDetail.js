import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001/products";
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/${productId}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }, [productId]);

  function getProducts() {
    window.location.href = "/";
  }

  const removeProduct = async(e) => {
    if (productId) {
        axios
        .delete(`${PRODUCT_MANAGEMENT_API}/${productId}`)
        .then(res => {
            alert(
                `Remove product ${JSON.stringify(
                  res.data
                )} successfully!!!`
              );
              window.location.href = "/";
        })
        .catch(err => {
          throw err;
        });
    }
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p><b>Id:</b> {product.id}</p>
      <p><b>name:</b> {product.name}</p>
      <p><b>Giá:</b> {product.price}</p>
      <p><b>Tồn kho:</b> {product.stock}</p>
      <p><b>descreption:</b> {product.description}</p>
      <button type="button" onClick={getProducts}>
        Back
      </button>&nbsp;
      <button type="button" onClick={removeProduct}>
        Remove
      </button>
    </div>
  );
}

export default ProductDetail;