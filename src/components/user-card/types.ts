export interface UserCardProps {
    avatar: string;
    date: string;
    first_name: string;
    last_name: string;
    onDelete(): void;
    onSave(first_name: string, last_name: string, userDate: string): void;
}

export interface UserInfoProps {
    date: string;
    editing: boolean;
    name: string;
    onChangeDate: (date: string) => void;
    onChangeName: (name: string) => void;
}

export interface UserActionsProps {
    className?: string;
    editing: boolean;
    onSave: () => void;
    onDelete: () => void;
    onCancel: () => void;
    onEdit: () => void;
}
