export interface IText {
    title: string;
    right?: any,
    description: string;
    children?: any,
    style?: any,
}

export default function Text(props: IText) {
    return <div className="info-container_text" {...props}>
        <div className={props.right ? 'info-container_title info-container_title__right' : 'info-container_title'}>
            {props.title}
        </div>
        <div
            className={props.right ? "info-container_description info-container_description__right" : "info-container_description"}>
            {props.description}
        </div>
        {props.children}
    </div>
}
