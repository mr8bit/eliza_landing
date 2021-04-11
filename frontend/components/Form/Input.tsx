interface Input {
    placeholder: string;
    name: string;
    id: string;
    style?: any;
    props_ref?: any;
    errors?: any
}

export default function Input(props: Input) {
    return <div className="form-group" style={props.style}>
        <input {...props.props_ref} name={props.name} id={props.id} className="form-control"
               placeholder={props.placeholder}/>
        <i style={{marginLeft:"30px", color:"red"}}>{props.errors ? props.errors : null}</i>
    </div>
}
