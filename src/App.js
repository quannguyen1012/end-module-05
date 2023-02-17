import Products from "./components/Products"
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path={`/products/:productId`} element={<ProductDetail />} />
        <Route path={"/products/add"} element={<ProductAdd />} />
        <Route path={`/products/edit/:productId`} element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
