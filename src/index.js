import React from "react";
import ReactDOM from "react-dom/client";
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';

const Header = <h1>This is my first React App</h1>;

//console.log(Header);

//ReactDOM.render(Header, document.getElementById('root'));

const NewMeth = ReactDOM.createRoot(document.getElementById('root'));
NewMeth.render(<App></App>);
//NewMeth.render(<Comp></Comp>);


