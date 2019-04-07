export interface UserModalProps {
    onCancel: Function;
    onCreate: (avatar: string, name: string) => void;
}
