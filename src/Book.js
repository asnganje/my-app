const Book = (props) => {
    const alTitle = 'book'
    return(
        <article className='book'>
            <span className="number">{props.index+1}</span>
            <img 
            src={props.img}
            alt={alTitle}
            />
            <h2>{props.title}</h2>
            <h4>{props.author.toUpperCase()}</h4>
            {props.children}
            
        </article>
    )
}

export default Book;