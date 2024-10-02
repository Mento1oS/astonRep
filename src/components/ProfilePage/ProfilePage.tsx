import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string;
}
export const ProfilePage = ({className}: ProfilePageProps) => {
    return (
        <div className={`${cls.ProfilePage} ${className || ''}`}>
            Страница профиля
        </div>
    );
};