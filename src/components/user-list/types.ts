import { User } from 'src/state/users/types';

export interface UserListProps {
    readonly users: Array<User>;
    onUserSave(name: string, index: number): void;
}
