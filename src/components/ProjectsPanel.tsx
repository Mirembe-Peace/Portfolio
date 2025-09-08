function ProjectsPanel(){
    return(
        <div className="p-3 project-card grid" >
            <p className="section-title text-white">Projects</p>
            <div className="card-container">
                <div className="project-cards p-10   border border-secondary rounded g-col-12">
                    <img src="/typing_game.webp" className="project-image  rounded" alt="project image"></img>
                    <div className="project-description">
                        <h1 className="project-title text-primary">Typing Game</h1>
                        <p className="project-info">This game helps beginner developers learn how to type faster</p>
                        <a className="buttons btn btn-primary fw-bold" href="footer" role="button">Visit</a>
                    </div>
                </div>
                <div className="project-cards p-10   border border-secondary rounded g-col-12">
                    <img src="/EBG.webp" className="project-image  rounded" alt="project image"></img>
                    <div className="project-description">
                        <h1 className="project-title text-primary">Eden Botanical Garden</h1>
                        <p className="project-info">An e-commerce website for selling plants with plant guides.</p>
                        <a className="buttons btn btn-primary fw-bold" href="footer" role="button">Visit</a>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="project-cards p-10   border border-secondary rounded g-col-12">
                    <img src="/AC_3000.webp" className="project-image  rounded" alt="project image"></img>
                    <div className="project-description">
                        <h1 className="project-title text-primary">AC_3000</h1>
                        <p className="project-info">A smart air cooling system that automatically adjusts the fan speed according to the room temperature</p>
                        <a className="buttons btn btn-primary fw-bold" href="footer" role="button">Visit</a>
                    </div>
                </div>
                <div className="project-cards p-10   border border-secondary rounded g-col-12">
                    <img src="/art_archive.webp" className="project-image  rounded" alt="project image"></img>
                    <div className="project-description">
                        <h1 className="project-title text-primary">Virtual tour</h1>
                        <p className="project-info">An interactive virtual tour of a cultural museum made with three js with Blender models</p>
                        <a className="buttons btn btn-primary fw-bold" href="footer" role="button">Visit</a>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="project-cards p-10   border border-secondary rounded g-col-12">
                    <img src="/score_board.webp" className="project-image  rounded" alt="project image"></img>
                    <div className="project-description">
                        <h1 className="project-title text-primary">Score-board</h1>
                        <p className="project-info">Digital score-board with computer-vision to keep track of university games </p>
                        <a className="buttons btn btn-primary fw-bold" href="footer" role="button">Visit</a>
                    </div>
                </div>
                <div className="project-cards p-10   border border-secondary rounded g-col-12">
                    <img src="/pink_planner.webp" className="project-image  rounded" alt="project image"></img>
                    <div className="project-description">
                        <h1 className="project-title text-primary">Pink_Planner</h1>
                        <p className="project-info">An aesthetic application that handles planning, scheduling and uses AI to manage budgets</p>
                        <a className="buttons btn btn-primary fw-bold" href="footer" role="button">Visit</a>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default ProjectsPanel;