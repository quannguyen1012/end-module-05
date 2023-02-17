import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductAdd() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001/products";
  const { productId } = useParams();
  const isCreate = !productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      axios
      .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
      .then(res => {
          setProduct(res.data);
      })
      .catch(err => {
        throw err;
      });
    }
  }, [productId]);

  const handleChange = (event) => {
    setProduct({...product, [event.target.name] : event.target.value});
  }

  function handleSubmit() {
    axios
      .post(`${PRODUCT_MANAGEMENT_API}`, product)
      .then(res => {
        alert(
          `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
        window.location.href = "/";
      })
      .catch(err => {
        throw err;
      });
  }

  return (
    <div>
      <h1>Product Add</h1>
      <form>
        <div>
          <label>name</label>
          <input name="name" value={product.name || ""} onChange={handleChange} />
        </div>
        <div>
          <label>price</label>
          <input name="price" value={product.price || ""} onChange={handleChange} />
        </div>
        <div>
        <label>hàng nhập vào</label>
          <input name="stock" value={product.stock || ""} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;