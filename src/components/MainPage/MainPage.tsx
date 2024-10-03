import cls from './MainPage.module.scss';
import {PageLoader} from "../PageLoader/PageLoader";
import {lazy, Suspense} from "react";
const ActiveUsers = lazy(()=> import("../ActiveUsers/ActiveUsers"));
const ArchivedUsers = lazy(()=> import("../ArchivedUsers/ArchivedUsers"));


interface MainPageProps {
    className?: string;
}

export const MainPage = ({className}: MainPageProps) => {
    return (
        <div className={`${cls.MainPage} ${className || ''}`}>
            <Suspense fallback={<PageLoader/>}>
                <ActiveUsers/>
                <ArchivedUsers/>
            </Suspense>
        </div>
    );
};