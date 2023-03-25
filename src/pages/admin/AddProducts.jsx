import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProducts = ({onAdd}) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e)=>{
    const name = e.target.name;
    setInputValue({...inputValue, [name]: e.target.value})
  }
  const onHandleSubmit = (e)=>{
    e.preventDefault();
    onAdd(inputValue)
    navigate("/admin/products")
  }
  return (
    <div className='container'>
      <h1>Add Product</h1>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="">
          <label htmlFor="" className='form-label'>Name</label>
          <input type="text" className='form-control' name='name' onChange={onHandleChange}/>
        </div>
        <div className="">
          <label htmlFor="" className='form-label'>Description</label>
          <textarea name='desc' onChange={onHandleChange} id="" cols="30" rows="5" className='form-control'></textarea>
        </div>
        <div className="">
          <label htmlFor="" className='form-label'>Image</label>
          <input type="file" className='form-control' name='image' onChange={onHandleChange}/>
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  )
}

export default AddProducts