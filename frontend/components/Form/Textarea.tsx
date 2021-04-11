interface ITextarea {
    placeholder: string;
    name: string;
    id: string;
    props_ref?: any;
    errors?: any
}

export default function Textarea(props: ITextarea) {
    return <div className="form-group">
        <textarea {...props.props_ref} name={props.name} id={props.id} className="form-control" rows={4}
                  placeholder={props.placeholder}/>
        <i style={{marginLeft: "30px", color: "red"}}>{props.errors ? props.errors : null}</i>

    </div>
}
