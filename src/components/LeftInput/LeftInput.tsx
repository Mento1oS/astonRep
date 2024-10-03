import cls from './LeftInput.module.scss'

interface LeftInputProps {
    placeholder: string;
}
export const LeftInput = ({placeholder}: LeftInputProps) => {
    return (
        <div className={cls.wrapper}>
            <input className={cls.input} placeholder={placeholder}/>
        </div>
    );
};