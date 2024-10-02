import cls from './Header.module.scss'

interface HeaderProps {
    className?: string;
}
export const Header = ({className}: HeaderProps) => {
    return (
        <div className={`${cls.Header} ${className || ''}`}>
            <div className={cls.logo}>
                <img src="./oldLogo.png" alt="old logo"/>
            </div>
            <div className={cls.actions}>
                <div className={cls.icons}>
                    <div className={cls.icon__heart}></div>
                    <div className={cls.icon__bell}></div>
                </div>
                <div className={cls.person}>
                    <div className={cls.person__photo}></div>
                    <div className={cls.profile__name}></div>
                </div>
            </div>
        </div>
    );
};