import Image from "next/image";
import Link from "next/link";
import {Icon, SOCIAL_PATH, ISocialItem} from '../Social/SocialItem'

interface IFooter {
    phone: string,
    email: string,
    social: ISocialItem[]
}

export default function Footer(props: IFooter) {
    const {email, phone, social} = props
    return <footer className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-item">
                    <Image
                        className={"logo"}
                        src="/img/eliza_logo.svg"
                        alt="Picture of the author"
                        height={88}
                        width={156}
                    />
                </div>
                <div className="footer-item">
                    <div className="footer-link"><a href="#">Об Элайзе</a></div>
                    <div className="footer-link"><a href="#">Примеры Опасного Контента</a></div>
                    <div className="footer-link"><a href="#">Наши услуги</a></div>
                    <div className="footer-link"><a href="#">СМИ о Нас</a></div>
                    <div className="footer-link"><a href="#">Обратная Свзязь</a></div>
                </div>
                <div className="footer-item">
                    <div className="footer-contact"><a href={`mailto:${email}`}>{email}</a></div>
                    <div className="footer-contact"><a href={`tel:${phone}`}>{phone}</a></div>
                    <div className="footer-social">
                        {social?.map(item => (
                            <div key={item.social} className="footer-social-item">
                                <Link href={item.link}>
                                    <a>
                                        <Icon path={SOCIAL_PATH[item.social]} width={"42px"} height={"42px"}/>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>

}
