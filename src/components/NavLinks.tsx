//import { MouseEvent } from "react";
// this is used to tell typescript what kind of variable the "event" is
// useState tells react that this component will cchange over time

//import { useState } from "react";
//how to make the component reusable , we use properties(props) these are inputs to our component,
//just like calling a function and putting argument

//using the typescript built in feature called interface
// interface NavLinksProps {
//   items: string[];
//   onSelectItem: (item: string) => void;
// }

function NavLinks() {

  //event handler
  //const handleClick = (event: React.MouseEvent<HTMLLIElement>) => console.log(event); 

  return (
    <nav className="p-2 bg-info bg-color-primary navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="./src/assets/logo.png" alt="Logo" width="35" height="35" className="logo-text d-inline-block align-text-center"></img>
        Apiarie
      </a>
      </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Notes</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default NavLinks;

//a component in react cannot return more than one element
//the loop to dynamically add something to the list without having to write more code for it again 
//items.map(item)
//each element in the thelist needs a key property (<li key = {list}></li>) so that react can keep track of which element in the list to change