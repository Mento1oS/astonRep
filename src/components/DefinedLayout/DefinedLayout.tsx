import cls from './DefinedLayout.module.scss'
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

interface DefinedLayoutProps {
    className?: string;
}
export const DefinedLayout = ({className}: DefinedLayoutProps) => {
    return (
        <div className={`${cls.DefinedLayout} ${className || ''}`}>
            <Header/>
            <div className={cls.wrapper}>
                <Outlet/>
            </div>
        </div>
    );
};