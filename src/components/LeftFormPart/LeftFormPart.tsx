import cls from './LeftFormPart.module.scss'

interface LeftFormPartProps {
    className?: string;
}
export const LeftFormPart = ({className}: LeftFormPartProps) => {
    return (
        <div className={`${cls.LeftFormPart} ${className || ''}`}>
            
        </div>
    );
};