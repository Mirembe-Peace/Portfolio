function BlogPanel(){
    return(
        <div className="p-3 project-card grid" >
            <p className="section-title text-white">Blogs</p>
            <div className="card-container">
                    <div className="project-cards p-10 bg-info bg-opacity-10 border border-secondary rounded g-col-12">
                        <img src="/typing_game.webp" className="project-image img-fluid rounded" alt="project image"></img>
                        <div className="project-description">
                            <h1 className="project-title">Typing Game</h1>
                            <p className="project-info">This game helps beginner developers learn how to type faster</p>
                        </div>
                    </div>
            </div>
        </div>  
    );
}

export default BlogPanel;