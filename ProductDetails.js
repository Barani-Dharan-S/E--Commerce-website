  import Button from "./Button"; 
  import { useState } from "react";
    
    let style = {
      padding: '0px 20px',
      fontSize: 15
    }
    

    function ProductDetails(props){
      let badge = 'badge-margin-left-240 badge ';
      badge += props.status ? 'bg-success' : 'bg-danger';
      
      let [productCount, updatedCount] = useState(0)

      function productCountFormat(){
        return productCount > 0 ? productCount : 0;
      }

      let incrementProductCount = function(){
        updatedCount(++productCount);
      }

      let decrementProductCount = function(){
        if(productCount !=0 )
        updatedCount(--productCount);
      }

    return (
      <div className="d-flex align-items-center justify-content-start mt-1">
                <h6 className="font-weight-bold my-2" style={{marginRight: 20}}>{props.price + "$"}</h6>
                <Button eventHandler={decrementProductCount}>-</Button>
                <span style={ style }>{productCountFormat()}</span>
                <Button eventHandler={incrementProductCount}>+</Button>
                <span className={ badge }>{props.status ? 'Available' : 'Unavailable'}</span>
      </div>
    )
    }

    export default ProductDetails;