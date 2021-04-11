interface ISubSection {
    title: string
}

export default function SubSection(props: ISubSection) {
    return <div className="sub-main-section">
        <div className="main-center">
            <div className="main-group_title_2">
                {props.title}
            </div>
        </div>
    </div>
}
