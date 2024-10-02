import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string;
}
export const MainPage = ({className}: MainPageProps) => {
    return (
        <div className={`${cls.MainPage} ${className || ''}`}>
            Главная страница
        </div>
    );
};