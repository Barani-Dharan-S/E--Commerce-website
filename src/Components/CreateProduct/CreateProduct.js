import ProductForm from "./ProductForm";
import { useState } from "react";


function CreateProduct(props){

let [showForm, updatedShowForm] = useState(false)

  function onCreateProduct(product){
    //console.log(product);
    props.createProduct(product);
  }

function OnCreateShow(){
  updatedShowForm(true);
}

function OnProductSubmittedOrCancelled(){
  updatedShowForm(false);
}

  return (
    <div style={{backgroundColor: 'white', padding: '10px 20px', borderRadius: 2}}>
      {!showForm &&<button onClick={OnCreateShow}>Create Product</button>}
      {showForm && <ProductForm createProduct={onCreateProduct} onCancel={OnProductSubmittedOrCancelled} ></ProductForm>}
    </div>
  );
}

export default CreateProduct;