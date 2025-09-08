// interface props{
//     children: reactNode;
// }

function ProfilePanel(){
    return(
        <div className="profile-panel">
            <img className="profile-picture" src="/Profile picture.webp" alt="Profile Picture"></img>
            <p className="my-name">Mirembe Peace Mercy</p>
            <p className="hook">Full stack developer | Embedded systems Engineer</p>
            <div className ="cv-button p-1 bg-info bg-opacity-10 border border-secondary rounded"><a href="./assets/Resume_for_MIREMBE_PEACE_MERCY.pdf" download className="text-light">Download CV</a></div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://github.com/Mirembe-Peace ">
                    <img src="/github.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    Mirembe-Peace
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/mirembe-peace-a76476320/">
                    <img src="/linkedin.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    in/mirembe-peace-a76476320
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://mail.google.com/mail/?view=cm&fs=1&to=peace2de@gmail.com">
                    <img src="/gmail.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    peace2de@gmail.com
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.youtube.com/@apiarie_lab">
                    <img src="/youtube.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center fs-6"></img>
                    @apiarie_lab
                </a>
            </div>
            <hr></hr>
            <p className="tech-stack">Tech Stack</p>
            <div className="grid wrap">
                <div><img src="/python.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/javascript.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/java.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/html.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/css.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/c.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/mongo.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img src="/node.webp" className="img-fluid stack-image" alt="img"></img></div>
            </div>
            
            
        </div>
    );
}

export default ProfilePanel;