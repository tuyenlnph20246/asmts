import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import {
  getAll,
  getOneProducts,
  addProducts,
  deleteProducts,
  updateProducts,
} from "./api/products";
import Dashboard from "./pages/admin/Dashboard";
import ProManagement from "./pages/admin/ProManagement ";
import AddProducts from "./pages/admin/AddProducts";
import EditProducts from "./pages/admin/EditProducts";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then(({ data }) => setProducts(data));
  }, []);
  const onHandleRemove = (id)=>{
    deleteProducts(id).then(()=> setProducts(products.filter((item)=> item.id !== id)))
  }
  const onHandleAdd = (product)=>{
    addProducts(product).then(()=>setProducts([...products, product]))
  }
  const onHandleEdit = (product)=>{
    updateProducts(product).then(()=>setProducts(product.map((item)=> item.id == product.id ? product: item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
          </Route>
        </Route>
        <Route path="admin">
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProManagement products={products} onRemove = {onHandleRemove}/>} />
            <Route path="add" element={<AddProducts onAdd={onHandleAdd}/>} />
            <Route path=":id/edit" element={<EditProducts onUpdate={onHandleEdit} products={products}/>} />
            <Route />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
