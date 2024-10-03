import cls from './RightFormPart.module.scss'
import {RightInput} from "../RightInput/RightInput";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setDummies, setPopupVisible} from "../../store/slices/usersSlice";
import {Popup} from "../Popup/Popup";

interface RightFormPartProps {
    className?: string;
}

export const RightFormPart = ({className}: RightFormPartProps) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(state => state.users.currentUser);
    const dummies = useAppSelector(state => state.users.dummies);
    const activeUsers = useAppSelector(state => state.users.users);
    const handleChanges = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        if (params.id !== undefined) {
            const newMap = new Map(dummies);
            newMap.set(Number(params.id), currentUser);
            dispatch(setDummies(newMap));
            dispatch(setPopupVisible(true));
            const timeOut = setTimeout(() => {
                dispatch(setPopupVisible(false));
            }, 4000);
        }
    }
    return (
        <div className={`${cls.RightFormPart} ${className || ''}`}>
            <div className={cls.wrapper}>
                <form className={cls.form} action="">
                    <div className={cls.header}>Данные профиля</div>
                    <RightInput value={currentUser.name} field={'name'} label={'Name'}/>
                    <RightInput value={currentUser.username} field={'username'} label={'Username'}/>
                    <RightInput value={currentUser.email} field={'email'} label={'Email'}/>
                    <RightInput value={currentUser.address.city} field={'addressCity'} label={'City'}/>
                    <RightInput value={currentUser.phone} field={'phone'} label={'Phone'}/>
                    <RightInput value={currentUser.company.name} field={'companyName'} label={'Company Name'}/>
                    <button disabled={
                        currentUser.name.length === 0 ||
                        currentUser.username.length === 0 ||
                        currentUser.email.length === 0 ||
                        currentUser.address.city.length === 0 ||
                        currentUser.phone.length === 0 ||
                        currentUser.company.name.length === 0
                    } onClick={handleChanges} className={cls.btn}>Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
};