// interface props{
//     children: reactNode;
// }

function ProfilePanel(){
    return(
        <div className="profile-panel">
            <img className="profile-picture" src="./src/assets/Profile picture.jpg" alt="Profile Picture"></img>
            <p className="my-name">Mirembe Peace Mercy</p>
            <p className="hook">Full stack developer | Embedded systems Engineer</p>
            <div className ="cv-button p-1 bg-info bg-opacity-10 border border-secondary rounded"><a href="./assets/Resume_for_MIREMBE_PEACE_MERCY.pdf" download className="text-light">Download CV</a></div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://github.com/Mirembe-Peace ">
                    <img src="./src/assets/github.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    Mirembe-Peace
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/mirembe-peace-a76476320/">
                    <img src="./src/assets/linkedin.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    in/mirembe-peace-a76476320
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="https://mail.google.com/mail/?view=cm&fs=1&to=peace2de@gmail.com">
                    <img src="./src/assets/gmail.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center"></img>
                    peace2de@gmail.com
                </a>
            </div>
            <div className="contact-badge container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./src/assets/logo.png" alt="Logo" width="20" height="20" className="logo bg-white d-inline-block align-text-center fs-6"></img>
                    Apiarie
                </a>
            </div>
            <hr></hr>
        </div>
    );
}

export default ProfilePanel;