import {useState} from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {Icon, ISocialItem} from '../components/Social/SocialItem'
import Info from '../components/Info'
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {Action} from '../action'

const Main = dynamic(() => import('../components/Main'));
const SubSection = dynamic(() => import('../components/SubSection'));
const Container = dynamic(() => import('../components/Container'));
const Title = dynamic(() => import('../components/Title'));
const Slider = dynamic(() => import('../components/Slider'), {ssr: false})
const Pricing = dynamic(() => import('../components/Pricing'));
const PricingItem = dynamic(() => import('../components/Pricing/PricingItem'));
const FormGroup = dynamic(() => import('../components/Form'));
const Half = dynamic(() => import('../components/Form/Half'));
const Input = dynamic(() => import('../components/Form/Input'));
const Textarea = dynamic(() => import('../components/Form/Textarea'));
const News = dynamic(() => import('../components/News'));
const NewsItem = dynamic(() => import('../components/News/NewsItem'));
const Social = dynamic(() => import('../components/Social'));
const SocialItem = dynamic(() => import('../components/Social/SocialItem'));
const Footer = dynamic(() => import('../components/Footer'));
const ContactModal = dynamic(() => import('../components/Modal'));
import ym, {YMInitializer} from 'react-yandex-metrika';

const COMPLETE = "M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z"

const SOCIAL_NETWORKS: ISocialItem[] = [
    {
        social: "vk",
        link: "https://vk.com/mr8bit"
    }, {
        social: "facebook",
        link: "https://vk.com/mr8bit"
    }, {
        social: "instagram",
        link: "https://vk.com/mr8bit"
    },
]
const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    text: yup.string().required(),
});

yup.setLocale({
    string: {
        email: 'Email должен быть действительным'
    },
    mixed: {
        required: 'Обязательное поле',
        default: 'Недопустимый формат'
    }
});
export default function Home() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const closeModal = () => {
        document.querySelector('body').classList.toggle('modal_is_open')
        setModalIsOpen(!modalIsOpen)
    }

    const openModal = () => {
        ym('reachGoal', 'request');
        document.querySelector('body').classList.toggle('modal_is_open')
        setModalIsOpen(!modalIsOpen)
    }
    const onSubmit = data => {
        Action.sendQuestion(data).then(() => setIsComplete(true)).catch((e) => console.log(e))
    };

    return (
        <>
            <Head>
                <title>Eliza: и в сети дети под присмотром</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content="Элайза может проверять не только группы, фотографии или видео, но также посты и музыку, чтобы определить психологические девиации и экстремисткие
                Контент в ленте может показать есть ли у вашего ребенка психологические девиации и наскольно серьезна проблема
                Как поговорить об этом с ребенком? Как ему помочь? Мы все объясним и предложим варианты от простых действий до обращению к специалисту
                Наши психологи ежедневно работают с детьми, обрабатывают большое количество контента. Мы также сотрудничаем с общественными организациями, которые предоставляют нам эти данные. Некоторые посты могут показаться жуткими даже для взрослого человека"/>
                <link rel="shortcut icon" href="/favicon/icon.ico"/>
                <link rel="shortcut icon" href="/favicon/icon.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/icon_apple_72.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon/icon_apple_114.png"/>
                <meta property="og:image" content="/preview.png"/>
                <link rel="canonical" href="https://eliza.ru"/>
                <meta property="og:locale" content="ru_RU"/>
                <meta property="og:site_name" content="Eliza: и в сети дети под присмотром"/>
                <meta property="og:title" content="Eliza: и в сети дети под присмотром"/>
                <meta property="og:description" content="Элайза может проверять не только группы, фотографии или видео, но также посты и музыку, чтобы определить психологические девиации и экстремисткие
                Контент в ленте может показать есть ли у вашего ребенка психологические девиации и наскольно серьезна проблема
                Как поговорить об этом с ребенком? Как ему помочь? Мы все объясним и предложим варианты от простых действий до обращению к специалисту
                Наши психологи ежедневно работают с детьми, обрабатывают большое количество контента. Мы также сотрудничаем с общественными организациями, которые предоставляют нам эти данные. Некоторые посты могут показаться жуткими даже для взрослого человека
                "/>
            </Head>

            <ContactModal
                isOpen={modalIsOpen}
                onClose={() => closeModal()}
            />

            <Main
                title={"Будьте Ближе"}
                sub_title={"И в сети ваши дети под присмотром"}
                onClickButton={() => openModal()}
            />
            <SubSection
                title={"Eliza - система определения психологических девиаций у детей и подростков"}
            />
            <Container>

                <Info.Section>
                    <Title>Что Элайза умеет?</Title>
                    <Info.Container>
                        <Info.Text
                            title={"ПРОВЕРЯЕТ СОЦ.СЕТИ ВАШЕГО РЕБЕНКА"}
                            description={"Элайза может проверять не только группы, фотографии или видео, но также посты и музыку, чтобы определить психологические девиации и экстремисткие наклонности"}
                        />
                        <Info.Image
                            image_url={'/img/info/check_social_network.png'}
                            alt={"ПРОВЕРЯЕТ СОЦ.СЕТИ ВАШЕГО РЕБЕНКА"}
                        />
                    </Info.Container>
                </Info.Section>

                <Info.Section>
                    <Info.Container className={'info-container info-container_reverse'}>
                        <Info.Text
                            right={"true"}
                            title={"Рассказывает вам что вызывает подозрения"}
                            description={"Контент в ленте может показать есть ли у вашего ребенка психологические девиации и наскольно серьезна проблема"}
                        />
                        <Info.Image
                            image_url={'/img/info/suspicions.png'}
                            alt={"Рассказывает вам что вызывает подозрения"}
                        />
                    </Info.Container>
                </Info.Section>

                <Info.Section>
                    <Info.Container>
                        <Info.Text
                            title={"Предлагает различные варинты решения"}
                            description={"Как поговорить об этом с ребенком? Как ему помочь? Мы все объясним и предложим варианты от простых действий до обращению к специалисту"}
                        />
                        <Info.Image
                            image_url={'/img/info/offer.png'}
                            alt={"Предлагает различные варинты решения"}
                        />
                    </Info.Container>
                </Info.Section>

            </Container>

            <div className="sub2-main-section">
                <Container>
                    <Info.Container className={"info-container_no_margin_top"}>
                        <Info.Text
                            style={{width: "60%"}}
                            title={"ПРИМЕРЫ ОПАСНОГО КОНТЕНТА"}
                            description={"Наши психологи ежедневно работают с детьми, обрабатывают большое количество контента. Мы также сотрудничаем с общественными организациями, которые предоставляют нам эти данные. Некоторые посты могут показаться жуткими даже для взрослого человека"}
                        >
                            <a onClick={() => openModal()} className="btn_link" style={{marginTop: '20px'}}>
                                Проверить группы
                            </a>
                        </Info.Text>
                        <Info.Image style={{width: "35%"}}>

                            <Slider/>

                        </Info.Image>
                    </Info.Container>
                </Container>
            </div>

            <Container>
                <Info.Section>
                    <Title>ЗАБОТА, А НЕ НАДЗОР</Title>
                    <Pricing>
                        <PricingItem color={'yellow'} title={"Проверка групп"} pricing={"Бесплатно"}
                                     onClickButton={() => openModal()}
                                     list_feature={['Проверка групп', 'Еженедельный отчет']}/>

                        <PricingItem color={'red'} title={"Полный анализ"} pricing={"199 руб"}
                                     onClickButton={() => openModal()}
                                     list_feature={['Проверка групп', 'Еженедельный отчет', 'Ежедневная проверка', 'Лайки и комметарии', 'Токсичный контент', 'Анализ фотографий', 'Подозрительные друзья', 'Выявление интересов', 'Анализ постов', 'Анализ видео', 'Вк, Instagram, TikTok']}/>

                        <PricingItem color={'green'} title={"Для организаций"} pricing={"По запросу"}
                                     onClickButton={() => openModal()}
                                     list_feature={['Проверка групп', 'Еженедельный отчет', 'Ежедневная проверка', 'Лайки и комметарии', 'Токсичный контент', 'Анализ фотографий', 'Подозрительные друзья', 'Выявление интересов', 'Анализ постов', 'Анализ видео', 'Вк, Instagram, TikTok', 'Составление психологического профиля', 'Создание профиля MBTI']}/>

                    </Pricing>
                </Info.Section>
            </Container>

            <Container>
                <Info.Section>
                    <Title>СМИ О НАС</Title>
                    <News>
                        <NewsItem
                            title={"Интерфакс"}
                            description={"Короткое интервью и описание нашего проекта в независимом информационном агентстве Интерфакс Образование"}
                            link={'https://academia.interfax.ru/ru/news/articles/4475/'}
                        />
                        <NewsItem
                            title={"Агенство городских новостей Москвы"}
                            description={"Маленькое описание нашего проекта"}
                            link={'https://www.mskagency.ru/materials/2995919'}
                        />
                        <NewsItem
                            title={"Новости района Сокол"}
                            description={"Маленькое описание нашего проекта"}
                            link={'https://sokolgazeta.ru/studenty-mai-sozdali-sistemu-analiza-psihologicheskogo-sostoyaniya-shkolnikov/'}
                        />
                    </News>
                </Info.Section>
            </Container>


            <Container>
                <Info.Section>
                    <Title>ЕСТЬ ВОПРОСЫ?</Title>
                    <div className="title_description">
                        Остались вопросы или есть предложения? <br/> Мы с удовольствум вам ответим и выслушаем
                    </div>


                    {isComplete ?
                        <div className={"result-form"} style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            justifyItems: "center",
                        }}>
                            <div className={"result mt-0"}>
                                <Icon fill={"#2dca8c"} path={COMPLETE} width={"72px"} height={"72px"}/>
                                <h3 className={"result-title"}>Спасибо Вам!</h3>
                                <div className={"result-description"}>
                                    В скором времени мы запустим, и оповестим Вас!
                                </div>
                            </div>
                        </div>
                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>

                                <Half>
                                    <Input props_ref={{...register("name", {required: true})}} name={"name"}
                                           placeholder={"Имя"}
                                           errors={errors.name?.message}
                                           id={"name"}/>
                                    <Input props_ref={{...register("email")}} name={"email"} placeholder={"Email"}
                                           errors={errors.email?.message}
                                           id={"email"}/>
                                </Half>

                                <Half>
                                    <Textarea props_ref={{...register("text")}} errors={errors.text?.message}
                                              name={"text"} placeholder={"Начните писать тут..."} id={"email"}/>
                                </Half>

                            </FormGroup>
                            <div className="form-footer">
                                <button type={"submit"}
                                        className="btn_link btn_link_send">Отправить
                                </button>
                            </div>
                        </form>
                    }

                </Info.Section>
            </Container>


            <Container>
                <Info.Section>
                    <Title>ТАКЖЕ МЫ ЕСТЬ В СОЦ, СЕТЯХ</Title>

                    <Social>
                        {
                            SOCIAL_NETWORKS.map(item => (
                                <SocialItem key={item.social} link={item.link} social={item.social}/>
                            ))
                        }
                    </Social>
                </Info.Section>
            </Container>

            <Footer
                social={SOCIAL_NETWORKS}
                email={"info@eliza.ru"}
                phone={"+7(916)986-45-58"}
            />

        </>


    )
}
