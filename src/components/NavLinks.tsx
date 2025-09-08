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
    <nav className="p-3 navbar mb-2 bg-primary-subtle text-primary-emphasis navbar-expand-lg ">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/logo.webp" alt="Logo" width="35" height="35" className="logo bg-white d-inline-block align-text-bottom"></img>
        <span className="brand-text">Apiarie</span> 
      </a>
      </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-medium text-white" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-white" href="projects-panel">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-white" href="#blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-white" href="https://github.com/Mirembe-Peace/NOTES">Notes</a>
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