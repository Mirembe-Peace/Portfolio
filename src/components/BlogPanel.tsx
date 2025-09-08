function BlogPanel(){
    return(
        <div className="p-3 project-card grid" >
            <p className="section-title text-white">Blogs</p>
            <div className="card-container">
                    <div className="blog-card p-10   border border-secondary rounded g-col-12">
                        <img loading = "lazy"src="/thoughts.webp" className="project-image  rounded" alt="project image"></img>
                        <div className="project-description">
                            <h1 className="blog-title text-white">3 Impossible things before breakfast:</h1>
                            <p className="project-info">
Every morning before breakfast, I think of three impossible things. And I ponder
on them throughout the day, returning to them from time to time like one
might turn a pebble over in the hand, feeling its familiar weight yet discovering
new textures each time.<br></br><br></br>
<strong>1. The Prime Number Pattern That is Hiding in Plain Sight</strong>
Prime numbers are the atoms of arithmetic-simple in definition, elusive in
pattern. The first of my impossible thoughts is this, ........</p>

                            <a className="button btn btn-primary fw-bold" href="https://medium.com/@peace2de" role="button">Read More</a>
                        </div>
                    </div>
            </div>
        </div>  
    );
}

export default BlogPanel;