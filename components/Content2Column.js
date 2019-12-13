export default function Content2Column(props) {
    return(
        <div className='content-container'>
            <div className='text-wrapper'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <div className='img-wrapper'>
                <img src={props.src}></img>
            </div> 
        </div>
    )
}