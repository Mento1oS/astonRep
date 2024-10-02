import cls from './ArchivedUsers.module.scss'

interface ArchivedUsersProps {
    className?: string;
}
export const ArchivedUsers = ({className}: ArchivedUsersProps) => {
    return (
        <div className={`${cls.ArchivedUsers} ${className || ''}`}>
            
        </div>
    );
};