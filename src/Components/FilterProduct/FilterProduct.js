import './FilterProduct.css';
let FilterProduct = (props) => {
  function OnFilterValueChanged(event){
    props.OnFilterValueSelected(event.target.value);
  }
  return (
<div className="filter-area">
     <select name="isAvailable" onChange={OnFilterValueChanged}>
         <option value="all">All</option>
         <option value="available">Available</option>
         <option value="unavailable">Unavailable</option>
     </select>
</div>)
}

export default FilterProduct;