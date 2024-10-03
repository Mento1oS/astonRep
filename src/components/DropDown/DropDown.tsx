import cls from './DropDown.module.scss'

interface DropDownProps {
    className?: string;
    id: number;
    isArchived: boolean;
    index?: number;
}

export const DropDown = ({className, id, isArchived, index}: DropDownProps) => {
    const activate = () => {
    };
    const archive = () => {
    };
    const hide = () => {
    };
    const edit = () => {
    };
    return (
        <div className={`${cls.DropDown} ${className || ''}`}>
            <div className={cls.container}>
                {
                    isArchived ?
                        <div className={cls.archivedDD}>
                            <div onClick={activate} className={cls.option}>Активировать</div>
                        </div> :
                        <div className={cls.activeDD}>
                            <div onClick={edit} className={cls.option}>Редактировать</div>
                            <div onClick={archive} className={cls.option}>Архивировать</div>
                            <div onClick={hide} className={cls.option}>Скрыть</div>
                        </div>
                }
            </div>
        </div>
    );
};