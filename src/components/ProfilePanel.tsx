// interface props{
//     children: reactNode;
// }

function ProfilePanel(){
    return(
        <div className="profile-panel">
            <img className="profile-picture" src="./public/Profile picture.jpg" alt="Profile Picture"></img>
            <p className="my-name">Mirembe Peace Mercy</p>
            <p className="hook">Full stack developer | Embedded systems Engineer</p>
            <div className ="cv-button p-1 bg-info bg-opacity-10 border border-secondary rounded"><a href="./assets/Resume_for_MIREMBE_PEACE_MERCY.pdf" download className="text-light">Download CV</a></div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://github.com/Mirembe-Peace ">
                    <img src="./public/github.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    Mirembe-Peace
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/mirembe-peace-a76476320/">
                    <img src="./public/linkedin.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    in/mirembe-peace-a76476320
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://mail.google.com/mail/?view=cm&fs=1&to=peace2de@gmail.com">
                    <img src="./public/gmail.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    peace2de@gmail.com
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.youtube.com/@apiarie_lab">
                    <img src="./public/youtube.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center fs-6"></img>
                    @apiarie_lab
                </a>
            </div>
            <hr></hr>
            <p className="tech-stack">Tech Stack</p>
            <div className="grid wrap">
                <div><img src="./public/python.png" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/javascript.jpeg" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/java.png" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/html.jpeg" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/css.jpeg" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/c.jpeg" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/mongo.jpeg" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="./public/node.jpeg" className="img-fluid stack-image" alt="img"></img></div>
            </div>
            
            
        </div>
    );
}

export default ProfilePanel;