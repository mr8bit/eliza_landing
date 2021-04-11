import Image from 'next/image'

interface IMain {
    title: string,
    sub_title: string,
    onClickButton: any
}

export default function Main(props: IMain) {
    const {title, sub_title} = props
    return <div className="main-section">

        <div className="main-center">

            <div className="main-group_center">
                <Image
                    className={"logo"}
                    src="/img/eliza_logo.svg"
                    alt="Picture of the author"
                    height={88}
                    width={156}
                />
                <div className="main-group">
                    <h2 className="main-group_title">{title}</h2>
                    <div className="main-group_description">{sub_title}</div>
                    <div style={{marginTop: "35px"}}>
                        <a className="btn_link" onClick={props.onClickButton}>
                            Оставить заявку
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <div className="main-group_center main-group_scroll">
            <div className="mouse"/>
            <p className="main-group-scroll-text">Вниз</p>
        </div>

    </div>
}
