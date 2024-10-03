import cls from './UserCard.module.scss'
import {User} from "../../types";
import {DropDown} from "../DropDown/DropDown";
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {setIsActiveDropDownOpen, setIsArchivedDropDownOpen} from "../../store/slices/usersSlice";
import {useEffect} from "react";

interface UserCardProps {
    className?: string;
    user: User,
    picture: string,
    index: number,
    isArchived: boolean
}

export const UserCard = ({className, user, picture, index, isArchived}: UserCardProps) => {
    const dispatch = useAppDispatch();
    const isArchivedUsersDropDownOpen = useAppSelector(state => state.users.isArchivedUsersDropDownOpen);
    const isActiveUsersDropDownOpen = useAppSelector(state => state.users.isActiveUsersDropDownOpen);
    const toggleDropDown = () => {
        if (isArchived) {
            const newArray = isArchivedUsersDropDownOpen.map((elem, i) => i === index ? !elem : elem);
            dispatch(setIsArchivedDropDownOpen(newArray));
        } else {
            console.log(isActiveUsersDropDownOpen, index);
            const newArray = [...isActiveUsersDropDownOpen].map((elem, i) => i === index ? !elem : elem);
            dispatch(setIsActiveDropDownOpen(newArray));
        }
    }

    return (
        <div className={cls.UserCard}>
            <div className={cls.container}>
                <div className={cls.picture}>
                    <img src={picture} alt="user"/>
                </div>
                <div className={cls.right}>
                    <div className={cls.user}>
                        <div className={cls.top}>
                            <div className={cls.name}>{user.name}</div>
                            <div className={cls.options}>
                                <img onClick={toggleDropDown} src="./Vector.png" alt="dropdownCaller"/>
                                <div
                                    className={`${cls.dropDown__container} ${(isArchived && isArchivedUsersDropDownOpen[index] ||
                                        !isArchived && isActiveUsersDropDownOpen[index]) ? cls.open : ''}`}>
                                    <DropDown index={index} id={user.id} isArchived={isArchived}/>
                                </div>
                            </div>
                        </div>
                        <div className={cls.bottom}>
                            <div
                                className={`${cls.company} ${className ? cls[className] : ''}`}>{user.company.name}</div>
                            <div className={cls.city}>{user.address.city}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};