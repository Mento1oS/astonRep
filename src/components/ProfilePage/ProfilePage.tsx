import cls from './ProfilePage.module.scss'
import {ProfileForm} from "../ProfileForm/ProfileForm";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../lib/hooks";

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({className}: ProfilePageProps) => {
    return (
        <div className={`${cls.ProfilePage} ${className || ''}`}>
            <Link to={'/'} className={cls.backLink}>
                <img src="./arrow-left.png" alt="left-arrow"/>
                <span
                    className={cls.text}>Назад
                </span>
            </Link>
            <ProfileForm/>
        </div>
    );
};