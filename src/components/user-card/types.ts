export interface UserCardProps {
    avatar: string;
    date: string;
    name: string;
    onDelete(): void;
    onSave(name: string): void;
}

