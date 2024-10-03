import cls from './ArchivedUsers.module.scss'
import {UserCard} from "../UserCard/UserCard";
import {useAppSelector} from "../../lib/hooks";

interface ArchivedUsersProps {
    className?: string;
}

const ArchivedUsers = ({className}: ArchivedUsersProps) => {
    const archivedUsers = useAppSelector(state=>state.users.archivedUsers);
    return (
        <div className={`${cls.ArchivedUsers} ${className || ''}`}>
            <div className={cls.header}>Архив</div>
            <div className={cls.users}>
                {archivedUsers.map((elem, index) => {
                    if(!elem) return;
                    return <UserCard isArchived={true} key={elem.id} user={elem} index={index} className={'archived'} picture={'./greyHuman.png'}/>
                })}
            </div>
        </div>
    );
};

export default ArchivedUsers;