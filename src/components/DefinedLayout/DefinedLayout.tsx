import cls from './DefinedLayout.module.scss'
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {useLazyGetAllUsersQuery} from "../../store/middlewares/users";
import {useEffect} from "react";
import {User} from "../../types";
import {setIsActiveDropDownOpen, setUsers} from "../../store/slices/usersSlice";

interface DefinedLayoutProps {
    className?: string;
}

export const DefinedLayout = ({className}: DefinedLayoutProps) => {
    const dispatch = useAppDispatch();
    const archivedUsers = useAppSelector(state => state.users.archivedUsers);
    const isArchivedUsersDropDownOpen = useAppSelector(state => state.users.isArchivedUsersDropDownOpen);
    const filteredUsers = useAppSelector(state=>state.users.users);
    const isActiveUsersDropDownOpen = useAppSelector(state => state.users.isActiveUsersDropDownOpen);
    const [getUsers, {
        data: allUsers,
        isSuccess: isUsersObtained
    }] = useLazyGetAllUsersQuery();
    const obtainUsers = async () => {
        await getUsers(archivedUsers)
            .unwrap()
            .then((data: User[]) => dispatch(setUsers(data.filter(user => archivedUsers.every(arch => user.id !== arch.id)))));
    }
    useEffect(() => {
        obtainUsers();
    }, [archivedUsers.length]);
    useEffect(() => {
        if(isArchivedUsersDropDownOpen.length!==filteredUsers.length){
            dispatch(setIsActiveDropDownOpen(new Array(filteredUsers.length).fill(false)));
        }
    }, [archivedUsers.length, isUsersObtained]);
    return (
        <div className={`${cls.DefinedLayout} ${className || ''}`}>
            <Header/>
            <div className={cls.wrapper}>
                <Outlet/>
            </div>
        </div>
    );
};