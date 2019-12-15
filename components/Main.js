import Content2Column from '../components/Content2Column'

export default function Main (props) {
    return(
        <main>
           <Content2Column 
           src={props.src}
           text={props.text}
            title={props.title}
            subtitle1={props.subtitle1}
            subtext1={props.subtext1}
            subtitle2={props.subtitle2}
            subtext2={props.subtext2}
            subtitle3={props.subtitle3}
            subtext3={props.subtext3}
            subtitle4={props.subtitle4}
            subtext4={props.subtext4}
            button1={props.button1}
            button2={props.button2}  
            />
        <style jsx>
            {`
                grid-column: 1/3;
            `}
        </style>
        </main>
    )
}