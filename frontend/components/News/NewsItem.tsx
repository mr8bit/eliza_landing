interface INewsItem {
    title: string;
    description: string;
    link: string
}

export default function NewsItem(props: INewsItem) {
    return <div className="news-item">
        <div>
            <div className="news-title">
                {props.title}
            </div>
            <div className="news-description">
                {props.description}
            </div>
        </div>
        <div className="news-link">
            <a href={props.link} className="btn_link btn_link__full btn_link_orange">
                Подробнее
            </a>
        </div>
    </div>
}
