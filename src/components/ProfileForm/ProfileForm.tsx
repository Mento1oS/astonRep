import cls from './ProfileForm.module.scss'
import {useAppSelector} from "../../lib/hooks";
import {useParams} from "react-router-dom";
import {LeftFormPart} from "../LeftFormPart/LeftFormPart";
import {RightFormPart} from "../RightFormPart/RightFormPart";

interface ProfileFormProps {
    className?: string;
}
export const ProfileForm = ({className}: ProfileFormProps) => {
    const params = useParams();
    const currentUser = useAppSelector(state=>state.users.currentUser);
    return (
        <div className={`${cls.ProfileForm} ${className || ''}`}>
            <LeftFormPart/>
            <RightFormPart/>
        </div>
    );
};