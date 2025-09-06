interface ButtonOneProp {
    children: string;
}

function ButtonOne({ children }: ButtonOneProp) {
    return (
        <a className="btn btn-primary" 
      href="footer" role="button"
    >{ children }</a>
    );
}

export default ButtonOne;