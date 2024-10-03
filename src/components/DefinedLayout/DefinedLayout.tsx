import cls from './DefinedLayout.module.scss'
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {useLazyGetAllUsersQuery} from "../../store/middlewares/users";
import {useEffect} from "react";
import {User} from "../../types";
import {setIsActiveDropDownOpen, setIsArchivedDropDownOpen, setUsers} from "../../store/slices/usersSlice";

interface DefinedLayoutProps {
    className?: string;
}

export const DefinedLayout = ({className}: DefinedLayoutProps) => {
    const dispatch = useAppDispatch();
    const archivedUsers = useAppSelector(state => state.users.archivedUsers);
    const isArchivedUsersDropDownOpen = useAppSelector(state => state.users.isArchivedUsersDropDownOpen);
    const filteredUsers = useAppSelector(state => state.users.users);
    const isActiveUsersDropDownOpen = useAppSelector(state => state.users.isActiveUsersDropDownOpen);
    const hidden = useAppSelector(state=>state.users.hidden);
    const [getUsers, {
        data: allUsers,
        isSuccess: isUsersObtained
    }] = useLazyGetAllUsersQuery();
    const obtainUsers = async () => {
        const sum = archivedUsers.length + hidden.size;
        await getUsers(sum)
            .unwrap()
            .then((data: User[]) => dispatch(setUsers(data.filter(user => !hidden.has(user.id) && archivedUsers.every(arch => user.id !== arch.id)))));
    }
    useEffect(() => {
        obtainUsers();
    }, [archivedUsers.length, filteredUsers.length]);
    useEffect(() => {
        dispatch(setIsActiveDropDownOpen(new Array(filteredUsers.length).fill(false)));
    }, [archivedUsers.length, isUsersObtained, filteredUsers.length]);
    useEffect(() => {
        dispatch(setIsArchivedDropDownOpen(new Array(archivedUsers.length).fill(false)));
    }, [archivedUsers.length]);
    return (
        <div className={`${cls.DefinedLayout} ${className || ''}`}>
            <Header/>
            <div className={cls.wrapper}>
                <Outlet/>
            </div>
        </div>
    );
};