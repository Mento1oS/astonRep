import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = ({className}: NotFoundPageProps) => {
    return (
        <div className={`${cls.NotFoundPage} ${className || ''}`}>
            Такой страницы не существует
        </div>
    );
};