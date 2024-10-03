import cls from './Popup.module.scss'
import {useAppDispatch} from "../../lib/hooks";
import {setPopupVisible} from "../../store/slices/usersSlice";

interface PopupProps {
    className?: string;
}

export const Popup = ({className}: PopupProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className={`${cls.Popup} ${className || ''}`}>
            <div className={cls.wrapper}>
                <div onClick={() => {
                    dispatch(setPopupVisible(false));
                }} className={cls.close}>
                    <img src="./close.png" alt="close"/>
                </div>
                <div className={cls.checkbox}>
                    <img src="./Checked-box.png" alt="chbx"/>
                </div>
                <div className={cls.message}>Изменения сохранены!</div>
            </div>
        </div>
    );
};