//import { MouseEvent } from "react";
// this is used to tell typescript what kind of variable the "event" is
// useState tells react that this component will cchange over time

//import { useState } from "react";
//how to make the component reusable , we use properties(props) these are inputs to our component,
//just like calling a function and putting argument

//using the typescript built in feature called interface
interface NavLinksProps {
  items: string[];
  onSelectItem: (item: string) => void;
}

function NavLinks({items, onSelectItem}: NavLinksProps) {

  //event handler
  //const handleClick = (event: React.MouseEvent<HTMLLIElement>) => console.log(event); 

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li 
          className = "item-list-group"
          key = {item}
          onClick= {() => {
            onSelectItem(item);
          }} //pass a reference 
         >{item}</li>))}
    </ul>
  );
}

export default NavLinks;

//a component in react cannot return more than one element
//the loop to dynamically add something to the list without having to write more code for it again 
//items.map(item)
//each element in the thelist needs a key property (<li key = {list}></li>) so that react can keep track of which element in the list to change