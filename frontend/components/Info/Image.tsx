interface IImage {
    image_url?: string
    alt?: string;
    children?: any;
    style?: any;
}

export default function Image(props: IImage) {
    return <div className="info-container_img" {...props}>

        {props.image_url ? <img className="info-container_img-fluid" src={props.image_url} alt={props.alt}/> : null}

        {props.children}

    </div>
}
