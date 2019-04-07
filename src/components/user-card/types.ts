export interface UserCardProps {
    avatar: string;
    date: string;
    first_name: string;
    last_name: string;
    onDelete(): void;
    onSave(first_name: string, last_name: string): void;
}

