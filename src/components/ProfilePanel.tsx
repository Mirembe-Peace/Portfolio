// interface props{
//     children: reactNode;
// }

function ProfilePanel(){
    return(
        <div className="profile-panel">
            <div className="profile-picture-container"><img loading = "lazy"className="profile-picture" src="/Profile picture.webp" alt="Profile Picture"></img></div>
            <p className="my-name">Mirembe Peace Mercy</p>
            <p className="hook">Full stack developer | Embedded systems Engineer</p>
            <div className ="cv-button p-1 bg-info bg-opacity-10 border border-secondary rounded"><a href="./assets/Resume_for_MIREMBE_PEACE_MERCY.pdf" download className="text-light">Download CV</a></div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://github.com/Mirembe-Peace ">
                    <img loading = "lazy"src="/github.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    Mirembe-Peace
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/mirembe-peace-a76476320/">
                    <img loading = "lazy"src="/linkedin.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    in/mirembe-peace-a76476320
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://mail.google.com/mail/?view=cm&fs=1&to=peace2de@gmail.com">
                    <img loading = "lazy"src="/gmail.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    peace2de@gmail.com
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.youtube.com/@apiarie_lab">
                    <img loading = "lazy"src="/youtube.webp" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center fs-6"></img>
                    @apiarie_lab
                </a>
            </div>
            <hr></hr>
            <p className="tech-stack">Tech Stack</p>
            <div className="grid wrap">
                <div><img loading = "lazy"src="/python.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/javascript.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/java.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/html.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/css.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/c.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/mongo.webp" className="img-fluid stack-image" alt="img"></img></div>
                <div><img loading = "lazy"src="/node.webp" className="img-fluid stack-image" alt="img"></img></div>
            </div>
            
            
        </div>
    );
}

export default ProfilePanel;