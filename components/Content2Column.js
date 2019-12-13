export default function Content2Column(props) {
    return(
        <div className='content-container'>
            <div className='text-wrapper'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div>
                    <div>{props.subtitle1}{props.subtext1}</div>
                    <div>{props.subtitle2}{props.subtext2}</div>
                    <div>{props.subtitle3}{props.subtext3}</div>
                </div>
                <div>
                    <div>{props.subtitle4}{props.subtext4}</div>
                    <div>
                        <button>{props.button1}</button>
                    </div>
                    <div>
                        <button>{props.button2}</button>
                    </div>
                </div>
            </div>
            <div className='img-wrapper'>
                <img src={props.src}></img>
            </div> 
            <style jsx>
                {`
                .content-container {
                    display: flex;
                }

                .img-wrapper {
                    width: 50%;
                }

                .text-wrapper {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                img {
                    object-fit: contain;
                    height: 300px;
                    width: 100%;
                }

                p {
                    font-weight: lighter;
                }
                `}
            </style>
        </div>
    )
}