import React, { useEffect, useState } from "react";
import axios from "axios";

function Products(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts()
    },[products]);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:3001/products");
        setProducts(result.data);
    };

    function handleCreate() {
        window.location.href = "/products/add";
    }
    console.log("sadds" + products);
    return (
        <div>
            <h1>Products</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name Product</th>
                        <th>price</th>
                        <th>inventory</th>
                        <th colSpan={2}>
                        <button type="button" onClick={handleCreate}>Create</button>
                        </th>
                     
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr>
                            <th scope="row" key={index}>
                            {index + 1}
                            </th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <a href={`/products/edit/${product.id}`}>Edit</a></td>
                            <td>
                                <a href={`/products/${product.id}`}>Detail</a></td>
                            </tr>
                    ))}
                </tbody>
              
            </table>
        </div>
    );

};

export default Products;
