import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductEdit() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001/products";
  const { productId } = useParams();
  const isCreate = !productId;
  const [product, setProduct] = useState({});
  let navigate = useNavigate();

  const onInputChange = (e) => {
    setProduct({...product, [e.target.name] : e.target.value});
  }
  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/${productId}`)
        .then(res => {
            setProduct(res.data);
            console.log(res);
        }).catch(err => {
          throw err;
        });
        
    }
  }, [productId]);

  const handleSubmit = async(e) => {
    axios
      .put(`${PRODUCT_MANAGEMENT_API}/${productId}`, product)
      .then(res => {
        alert(
          `${isCreate} product ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
       
        navigate("/");
      })
      .catch(err => {
        throw err;
      });
  }

  function getProducts() {
    window.location.href = "/";
  }



  return (
    <div>
      <h1>Product Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input readOnly name="id" value={product.id} onChange= {(e) => onInputChange(e)} />
        </div>
        <div>
          <label>name</label>
          <input name="name" value={product.name} onChange= {(e) => onInputChange(e)} />
        </div>
        <div>
          <label>price</label>
          <input name="price" value={product.price} onChange= {(e) => onInputChange(e)} />
        </div>
        <div>
        <label>stock</label>
          <input name="stock" value={product.quantity} onChange= {(e) => onInputChange(e)} />
        </div>
        <button type="button" onClick={getProducts}>
          Back
        </button>&nbsp;
        <button type="button" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;