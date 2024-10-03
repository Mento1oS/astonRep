import cls from './DropDown.module.scss'
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setArchivedUsers, setCurrentUser, setDummies, setHidden, setUsers} from "../../store/slices/usersSlice";
import {useNavigate} from "react-router-dom";

interface DropDownProps {
    className?: string;
    id: number;
    isArchived: boolean;
    index: number;
}

export const DropDown = ({className, id, isArchived, index}: DropDownProps) => {
    const dispatch = useAppDispatch();
    const activeUsers = useAppSelector(state => state.users.users);
    const archivedUsers = useAppSelector(state => state.users.archivedUsers);
    const navigate = useNavigate();
    const dummies = useAppSelector(state=>state.users.dummies);
    const hidden = useAppSelector(state=>state.users.hidden);
    const activate = () => {
        dispatch(setArchivedUsers([...archivedUsers].filter(elem => elem.id !== id)));
    };
    const archive = () => {
        dispatch(setArchivedUsers([...archivedUsers, activeUsers[index]]));
    };
    const hide = () => {
        const hiddenCopy = new Set(Array.from(hidden));
        hiddenCopy.add(id);
        dispatch(setHidden(hiddenCopy));
        dispatch(setUsers([...activeUsers].filter(elem => elem.id !== id)));
    };
    const edit = () => {
        dispatch(setCurrentUser(activeUsers[index]));
        const newMap = new Map(dummies);
        newMap.set(id, activeUsers[index]);
        dispatch(setDummies(newMap));
        navigate(`/${id}`);
    };
    return (
        <div className={`${cls.DropDown} ${className || ''}`}>
            <div className={cls.container}>
                {
                    isArchived ?
                        <div className={cls.archivedDD}>
                            <div onClick={activate} className={cls.option}>Активировать</div>
                        </div> :
                        <div className={cls.activeDD}>
                            <div onClick={edit} className={cls.option}>Редактировать</div>
                            <div onClick={archive} className={cls.option}>Архивировать</div>
                            <div onClick={hide} className={cls.option}>Скрыть</div>
                        </div>
                }
            </div>
        </div>
    );
};