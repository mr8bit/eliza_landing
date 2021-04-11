export default function Container(props) {
    return <div className={"info-container " + props.className} style={props.styles}>{props.children}</div>
}
