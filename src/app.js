        import './app.css';
        import CreateProduct from './Components/CreateProduct/CreateProduct';
        import React,{useState} from 'react';
        import ProductList from './Components/ProductList';
        import FilterProduct from './Components/FilterProduct/FilterProduct';

        let products = [
            {
                pID: 1, 
                pName: 'Fresh Milk', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
                isAvailable: true,
                image: 'images/fresh-milk.png',
                price: 12,
                stock: 10
            },
            {
                pID: 2, 
                pName: 'Cottage Cheese', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
                isAvailable: false,
                image: "images/cottage-cheese.png",
                price: 10,
                stock: 12
            },
            {
                pID: 3, 
                pName: 'Brocoli', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
                isAvailable: true,
                image: "images/brocoli.png",
                price: 15,
                stock: 15
            },
            {
                pID: 4, 
                pName: 'oranges', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
                isAvailable: true,
                image: "images/oranges.png",
                price: 20,
                stock: 9
            },
            {
                pID: 5, 
                pName: 'Olive oil', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
                isAvailable: false,
                image: "images/olive-oil.png",
                price: 14,
                stock: 11
            }
            ]

        function App(){
            let [newProductList, updatednewProductList] = useState(products);

            let [FilterTextVal, updatedFilterTextVal] = useState('all');

            let FilteredProductList = newProductList.filter((product) => {
                if(FilterTextVal === 'available'){
                    return product.isAvailable === true;
                }
                else if(FilterTextVal === 'unavailable'){
                    return product.isAvailable === false;
                }
                else{
                    return product;
                }
            })

            function createProduct(product){
                product.pID = newProductList.length + 1;
                updatednewProductList([product, ...newProductList]);
            }

function OnFilterValueSelected(filterValue){
    updatedFilterTextVal(filterValue);
}

        return (<div className='row'> 
        <div className='col-lg-8 mx-auto'>
            <CreateProduct createProduct={createProduct}></CreateProduct>
            <FilterProduct OnFilterValueSelected={OnFilterValueSelected}></FilterProduct>
            <ProductList newProductList={FilteredProductList} ></ProductList>
        </div>
        </div>);
        }

        export default App;