export default function Star(prop){

    
    return(
        <>
            <h3>Hello {prop.user}</h3>
            <button className="fav" onClick={prop.handleClick}>
                <img src={prop.fav ? "/filled-star-1.png" : "/empty-star-1.png"} alt="fav" />
            </button>
        </>
    )
}