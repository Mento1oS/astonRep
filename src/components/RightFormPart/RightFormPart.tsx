import cls from './RightFormPart.module.scss'

interface RightFormPartProps {
    className?: string;
}
export const RightFormPart = ({className}: RightFormPartProps) => {
    return (
        <div className={`${cls.RightFormPart} ${className || ''}`}>
            
        </div>
    );
};