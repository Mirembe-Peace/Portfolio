//import the Message component 
//import Message from './Message';

import NavLinks from './components/NavLinks.tsx';
  const items = [
    'Home',
    'Projects',
    'Blogs',
    'My Notes'
  ];

  const handleSelectItem = (item: string) => { console.log(item);}

// function to create a div to hold the message component
function App() {
 // we can pass the list as attributes of an html element
    return <div><NavLinks items={items} onSelectItem={handleSelectItem}/></div>
}

export default App;

