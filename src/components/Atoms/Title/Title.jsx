export default function Title(props) {
    return (
        <h1 style={{color: "white", background: props.color}}>
            {props.children}
        </h1>
    )
}
