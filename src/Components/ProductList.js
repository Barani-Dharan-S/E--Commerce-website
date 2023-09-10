import Products from "./ProductList/Product";

  function ProductList(props){
    //console.log(props.newProduct);
   return (props.newProductList.length === 0) ? <h3>No Products available</h3> :
    (
    <ul className="list-group shadow">
        {
        props.newProductList.map((product) => {
            return <Products 
            key = {product?.pID}
            id={product?.pID}
            name={product?.pName}
            description={product?.desc}
            status={product?.isAvailable}
            image={product?.image}
            price={product?.price} 
            />
        })
        }
    
        </ul>);
  }

  export default ProductList;