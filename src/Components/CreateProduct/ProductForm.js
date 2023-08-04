import React,{useState} from 'react';

function ProductForm(props){

    let [pName, updatedName] = useState('');
    let [pPrice, updatedPrice] = useState('');
    let [pDesc, updatedDesc] = useState('');
    let [pAvail, updatedAvail] = useState(false);
    let [pImage, updatedImage] = useState('');

    // let [userinput, updatedUserInp] = useState({
    //     pName: '',
    //     pPrice: '',
    //     pDesc: '',
    //     pAvail: '',
    //     pImage: ''
    // });

function nameEventHandler(event){
    updatedName(event.target.value);
    // updatedUserInp({
    //     ...userinput,
    //      pName: event.target.value
    // })
}
function priceEventHandler(event){
    updatedPrice(event.target.value);
    // updatedUserInp({
    //     ...userinput,
    //      pPrice: event.target.value
    // })
}

function descriptionEventHandler(event){
    updatedDesc(event.target.value);
    // updatedUserInp({
    //     ...userinput,
    //      pDesc: event.target.value
    // })
}

function availabilityEventHandler(event){
    updatedAvail(event.target.checked);
    // updatedUserInp({
    //     ...userinput,
    //      pAvail: event.target.value
    // })
}

function imageEventHandler(event){
    updatedImage(event.target.value);
    // updatedUserInp({
    //     ...userinput,
    //      pImage: event.target.value
    // })
}

function createProductEventHandler(event){
    event.preventDefault();
    let product ={ 
        pName: pName, 
        desc: pDesc,
        isAvailable: Boolean(pAvail),
        image: pImage,
        price: Number(pPrice)
    }

    updatedName('');
    updatedPrice('');
    updatedDesc('');
    updatedAvail(false);
    updatedImage('');

    props.createProduct(product);
    //console.log(product);
}

  return (<div>
    <form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    value={pName}
                    placeholder="Product Name"
                    onChange={nameEventHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    value={pPrice}
                    placeholder="Product Price"
                    onChange={priceEventHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    value={pDesc}
                    placeholder="Product Description" 
                    onChange={descriptionEventHandler}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={pAvail}
            onChange={availabilityEventHandler}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" value={pImage}
            id="select-image" onChange={imageEventHandler} />
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  </div>);
}

export default ProductForm;