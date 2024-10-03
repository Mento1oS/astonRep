import cls from './RightInput.module.scss'
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setCurrentUser} from "../../store/slices/usersSlice";

interface RightInputProps {
    className?: string;
    label: string;
    value: string;
    field: string;
}

export const RightInput = ({className, label, value, field}: RightInputProps) => {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(state => state.users.currentUser);
    return (
        <div className={`${cls.RightInput} ${className || ''}`}>
            <label className={cls.label} htmlFor={label}>{label}</label>
            <input
                type={'search'}
                onChange={(e) => {
                    if (field === 'addressCity') {
                        dispatch(setCurrentUser({
                            ...currentUser, address: {
                                ...currentUser.address, city: e.target.value
                            }
                        }))
                    } else if (field === 'companyName') {
                        dispatch(setCurrentUser({
                            ...currentUser, company: {...currentUser.company, name: e.target.value}
                        }))
                    } else {
                        dispatch(setCurrentUser({
                            ...currentUser, [field]: e.target.value
                        }))
                    }
                }}
                value={value}
                className={cls.input}
                placeholder={label}
                id={label}/>
        </div>

    );
};