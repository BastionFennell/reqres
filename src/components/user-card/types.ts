export interface UserCardProps {
    avatar: string;
    date: string;
    name: string;
    onDelete(): void;
    onSave(value: string): void;
}

