import cls from './ActiveUsers.module.scss'
import {useAppSelector} from "../../lib/hooks";
import {UserCard} from "../UserCard/UserCard";

interface ActiveUsersProps {
    className?: string;
}

const ActiveUsers = ({className}: ActiveUsersProps) => {
    const activeUsers = useAppSelector((state) => state.users.users)
    return (
        <div className={`${cls.ActiveUsers} ${className || ''}`}>
            <div className={cls.header}>Активные</div>
            <div className={cls.users}>
                {activeUsers.map((elem, index) => {
                    return <UserCard isArchived={false} key={elem.id} index={index} user={elem}
                                     picture={'./human.jpeg'}/>
                })}
            </div>
        </div>
    );
};

export default ActiveUsers;