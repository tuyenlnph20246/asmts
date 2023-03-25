import React from "react";

const ProManagement = ({ products,onRemove }) => {
  // console.log(onRemove);
  const onRemovebtn = (id)=>{
    const confirm = window.confirm("Bạn có muốn xóa không?")
    if(confirm){
      onRemove(id)
    }
  }
  return (
    <div className="container">
      <h1>ProManagement </h1>
      <table className="table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Name</td>
            <td>Description</td>
            <td>image</td>
            <td>Custom</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item,index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.image}</td>
                <td>
                  <button onClick={()=> onRemovebtn(item.id)} className="btn btn-danger">Remove</button>
                  <a href={`/admin/products/${item.id}/edit`}>
                    <button className="btn btn-primary">Edit</button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProManagement;
