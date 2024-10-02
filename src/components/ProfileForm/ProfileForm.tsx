import cls from './ProfileForm.module.scss'

interface ProfileFormProps {
    className?: string;
}
export const ProfileForm = ({className}: ProfileFormProps) => {
    return (
        <div className={`${cls.ProfileForm} ${className || ''}`}>
            
        </div>
    );
};