import cls from './ProfileForm.module.scss'
import {LeftFormPart} from "../LeftFormPart/LeftFormPart";
import {RightFormPart} from "../RightFormPart/RightFormPart";

interface ProfileFormProps {
    className?: string;
}
export const ProfileForm = ({className}: ProfileFormProps) => {
    return (
        <div className={`${cls.ProfileForm} ${className || ''}`}>
            <LeftFormPart/>
            <RightFormPart/>
        </div>
    );
};