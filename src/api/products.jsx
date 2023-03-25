import instance from "./instance";
const getAll = ()=>{
  return instance.get("/products");
}
const getOneProducts=(id)=>{
  return instance.get(`/products/${id}`)
}
const deleteProducts=(id)=>{
  return instance.delete(`/products/${id}`)
}
const addProducts=(products)=>{
  return instance.post(`/products/`,products)
}
const updateProducts = (products)=>{
  return instance.put(`/products/${products.id}`, products)
}
export {getAll, getOneProducts,deleteProducts,addProducts, updateProducts}