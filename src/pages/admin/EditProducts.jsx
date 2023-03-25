import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProducts = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  useEffect(()=>{
    const currenPro = props.products.find((item)=> item.id == id )
    setProduct(currenPro)
  },[props])
  
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e)=>{
    const name = e.target.name;
    setInputValue({...inputValue, [name]: e.target.value})
  }
  const onHandleSubmit = (e)=>{
    e.preventDefault();
    props.onUpdate({...product, ...inputValue})
    navigate("/admin/products")
  }
  return (
    <div className="container ">
      <h1>EditProducts</h1>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="">
          <label htmlFor="" className='form-label'>Name</label>
          <input type="text" className='form-control' name='name' onChange={onHandleChange} defaultValue={product?.name}/>
        </div>
        <div className="">
          <label htmlFor="" className='form-label'>Description</label>
          <textarea name='desc' onChange={onHandleChange} id="" cols="30" rows="5" className='form-control' defaultValue={product?.desc}></textarea>
        </div>
        <div className="">
          <label htmlFor="" className='form-label'>Image</label>
          <input type="file" className='form-control' name='image' onChange={onHandleChange} defaultValue={product?.image}/>
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default EditProducts;
