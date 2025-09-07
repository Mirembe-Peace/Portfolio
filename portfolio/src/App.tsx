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
            <main>
                <div className="profile">
                    <ProfilePanel/>
                </div>
                <div className="content">
                    <AboutMe/>

                    <ProjectsPanel/>

                    <BlogPanel/>
                </div>
            </main>

        </div>
    ); }

export default App;

