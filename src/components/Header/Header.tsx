import cls from './Header.module.scss'
import {Link} from "react-router-dom";

interface HeaderProps {
    className?: string;
}
export const Header = ({className}: HeaderProps) => {
    return (
        <div className={`${cls.Header} ${className || ''}`}>
            <div className={cls.wrapper}>
                <Link className={cls.logo} to={'/'}>
                    <img src="./oldLogo.png" alt="old logo"/>
                </Link>
                <div className={cls.actions}>
                    <div className={cls.icons}>
                        <div className={cls.icon__heart}>
                            <img src="./heart.png" alt="heart"/>
                        </div>
                        <div className={cls.icon__bell}>
                            <img src="./bell.png" alt="bell"/>
                        </div>
                    </div>
                    <div className={cls.person}>
                        <div className={cls.person__photo}>
                            <img src="./human.jpeg" alt="human_pic"/>
                        </div>
                        <div className={cls.person__name}>Ivan1234</div>
                    </div>
                </div>
            </div>

        </div>
    );
};