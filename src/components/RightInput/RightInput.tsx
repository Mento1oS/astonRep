import cls from './RightInput.module.scss'

interface RightInputProps {
    className?: string;
    label: string;
}
export const RightInput = ({className, label}: RightInputProps) => {
    return (
        <div className={`${cls.RightInput} ${className || ''}`}>
            <label className={cls.label} htmlFor={label}>{label}</label>
            <input type={'search'} className={cls.input} placeholder={label} id={label}/>
        </div>

    );
};