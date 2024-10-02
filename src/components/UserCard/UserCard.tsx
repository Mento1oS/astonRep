import cls from './UserCard.module.scss'

interface UserCardProps {
    className?: string;
}
export const UserCard = ({className}: UserCardProps) => {
    return (
        <div className={`${cls.UserCard} ${className || ''}`}>
            
        </div>
    );
};