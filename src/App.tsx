import AboutMe from './components/AboutMe.tsx';
import ProjectsPanel from './components/ProjectsPanel.tsx';
import ProfilePanel from './components/ProfilePanel.tsx';
import BlogPanel from './components/BlogPanel.tsx';
//import ButtonOne from './components/ButtonOne.tsx';
import NavLinks from './components/NavLinks.tsx';

// function to create a div to hold the message component
function App() {
 // we can pass the list as attributes of an html element
    return (
        <div>
            <NavLinks/>
            <main className="container">
                <div className="profile">
                    <ProfilePanel/>
                </div>
                <div className="content">
                    <section id="home" ><AboutMe/></section>
                    <section id="projects-panel" ><ProjectsPanel/></section>
                    <section id="blogs"><BlogPanel/></section> 
                </div>
            </main>

        </div>
    ); }

export default App;

