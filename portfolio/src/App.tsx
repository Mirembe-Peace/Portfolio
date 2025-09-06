//import the Message component 
//import Message from './Message';

import NavLinks from './components/NavLinks';
  const items = [
    'Home',
    'Projects',
    'Blogs',
    'My Notes'
  ];

// function to create a div to hold the message component
function App() {
 // we can pass the list as attributes of an html element
    return <div><NavLinks items={items}/></div>
}

export default App;

