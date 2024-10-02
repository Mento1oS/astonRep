import cls from './ActiveUsers.module.scss'

interface ActiveUsersProps {
    className?: string;
}
export const ActiveUsers = ({className}: ActiveUsersProps) => {
    return (
        <div className={`${cls.ActiveUsers} ${className || ''}`}>
            
        </div>
    );
};