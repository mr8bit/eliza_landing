import {useState} from "react";
import Modal from 'react-modal';
import Input from "../Form/Input";
import {Icon} from "../Social/SocialItem";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Action} from '../../action'

const CLOSE = "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
const COMPLETE = "M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z"

interface IContactModal {
    isOpen: boolean,
    onClose: any
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
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
export default function ContactModal(props: IContactModal) {
    const {isOpen, onClose} = props;
    const [isComplete, setIsComplete] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    function handleCloseModal() {
        props.onClose()
    }

    const onSubmit = data => {
        Action.sendRequest(data).then(() => setIsComplete(true)).catch((e) => console.log(e))
    };

    return <Modal
        closeTimeoutMS={500}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        isOpen={isOpen}>

        <div className={isComplete ? "modal-header results" : "modal-header"}>
            {isComplete ? null : <h2 className={"modal-title"}>Оставьте заявку</h2>}
            <div className={"modal-close"} onClick={onClose}>
                <Icon path={CLOSE} width={"24px"} height={"24px"}/>
            </div>
        </div>

        <div className={"modal-body"}>
            {isComplete ?
                <div className={"result"}>
                    <Icon fill={"#2dca8c"} path={COMPLETE} width={"72px"} height={"72px"}/>
                    <h3 className={"result-title"}>Спасибо Вам!</h3>
                    <div className={"result-description"}>
                        В скором времени мы запустим, и оповестим Вас!
                    </div>
                </div>
                :
                <>
                    <div className={"modal-description"}>
                        В скором времени, мы запустим сервис, что бы получить скидку на первое использование, оставьте
                        свою почту и мы оповестим Вас
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className={"modal-form"}>
                        <Input errors={errors.name?.message} props_ref={{...register("name", {required: true})}}
                               style={{marginRight: 0}} name={"name"} placeholder={"Имя"} id={"name"}/>
                        <Input errors={errors.email?.message} props_ref={{...register("email", {required: true})}}
                               style={{marginRight: 0}} name={"email"} placeholder={"Email"} id={"email"}/>
                        <div className="mt-2">
                            <button type={"submit"} style={{width: "100%"}}
                                    className="btn_link btn_link_send mt-send">Отправить
                            </button>
                        </div>
                    </form>
                </>}
        </div>

    </Modal>

}
