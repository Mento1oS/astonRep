import cls from './RightFormPart.module.scss'
import {RightInput} from "../RightInput/RightInput";

interface RightFormPartProps {
    className?: string;
}
export const RightFormPart = ({className}: RightFormPartProps) => {
    return (
        <div className={`${cls.RightFormPart} ${className || ''}`}>
            <div className={cls.wrapper}>
                <form className={cls.form} action="">
                    <div className={cls.header}>Данные профиля</div>
                    <RightInput label={'Name'}/>
                    <RightInput label={'Username'}/>
                    <RightInput label={'Email'}/>
                    <RightInput label={'City'}/>
                    <RightInput label={'Phone'}/>
                    <RightInput label={'Company Name'}/>
                    <button className={cls.btn}>Сохранить</button>
                </form>
            </div>
        </div>
    );
};