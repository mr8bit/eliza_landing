import '../styles/main.sass'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {YMInitializer} from "react-yandex-metrika";

function MyApp({Component, pageProps}) {
    return <>
        <Component {...pageProps} />
        <YMInitializer accounts={[75343552]} options={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        }} version="2"/>

    </>

}

export default MyApp
