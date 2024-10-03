import cls from './LeftFormPart.module.scss'
import {LeftInput} from "../LeftInput/LeftInput";

interface LeftFormPartProps {
    className?: string;
}
export const LeftFormPart = ({className}: LeftFormPartProps) => {
    return (
        <div className={`${cls.LeftFormPart} ${className || ''}`}>
            <div className={cls.wrapper}>
                <div className={cls.picture__block}>
                    <img src="./human.jpeg" alt="human"/>
                </div>
                <div className={cls.metadata}>
                    <div className={cls.header}>Данные профиля</div>
                    <LeftInput placeholder={'Рабочее пространство'}/>
                    <LeftInput placeholder={'Приватность'}/>
                    <LeftInput placeholder={'Безопасность'}/>
                </div>
            </div>
        </div>
    );
};