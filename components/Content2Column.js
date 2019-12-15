export default function Content2Column(props) {
    return(
        <div className='content-container'>
            <div className='text-wrapper'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className="span-container">
                    <div id="first-title" className="span-wrapper">
                        <span className="subtitle">{props.subtitle1}</span>
                        <span>{props.subtext1}</span>
                    </div>
                    <div className="span-wrapper">
                        <span className="subtitle">{props.subtitle2}</span>
                        <span>{props.subtext2}</span>
                    </div>
                    <div className="span-wrapper">
                        <span className="subtitle">{props.subtitle3}</span>
                        <span>{props.subtext3}</span>
                    </div>
                </div>
                <div id="bottom-span-container" className="span-container">
                    <div id="second-title" className="span-wrapper">
                        <span className="subtitle">{props.subtitle4}</span>
                        <span>{props.subtext4}</span>
                        </div>
                    <div className="span-wrapper">
                        <button id="button-save">{props.button1}</button>
                    </div>
                    <div className="span-wrapper">
                        <button id="button-print">{props.button2}</button>
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

                .span-wrapper {
                    display: flex;
                    flex-direction: column;
                }

                .span-wrapper:before {
                    content: " ";
                    display: block;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    width: 27px;
                    background-size: contain;
                    background-repeat: no-repeat;
                }

                .span-container {
                    display: flex;
                    justify-content: space-between;
                    margin: 0 0 35px 0;
                    position: relative;
                    padding: 15px 0 0 50px;
                    1px solid lightgrey;
                }

                .subtitle {
                    font-weight: lighter;
                    text-transform: uppercase;
                    font-size: 0.8em;
                }

                #first-title:before {
                    background-image: url(/img/clock.png);
                }

                #second-title:before {
                    background-image: url(/img/bread.png);
                }

                #bottom-span-container {
                    border-top: 1px solid lightgrey;
                }

                button {
                    padding: 8px 25px;
                    border: 2px solid #CE8287;
                    position: relative;
                }

                button:hover {
                    background-color: #CE8287;
                    transition: 0.5s;
                    color: white;
                }

                button:before {
                    content: " ";
                    display: block;
                    height: 100%;
                    width: 13px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    position: absolute;
                    left: 5px;
                }

                #button-save:before {
                    background-image: url("/img/plus.jpg")
                }

                #button-print:before {
                    background-image: url("/img/print.png")
                }

                @media screen and (max-width:960px) {
                    .span-container {
                        flex-direction: column;
                    }

                    .span-wrapper {
                        padding: 10px 0;
                    }
                }

                @media screen and (max-width:576px) {
                    .content-container {
                        flex-direction: column;
                    }

                    .text-wrapper {
                        width: 100%;
                    }

                    .img-wrapper {
                        width: 100%
                    }
                }

                `}
            </style>
        </div>
    )
}