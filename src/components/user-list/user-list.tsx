import React, { Component } from 'react';

import { User } from 'src/state/users/types';
import { UserListProps } from './types';

import UserCard from 'src/components/user-card';

const UserList = ({
    onUserSave,
    users,
}: UserListProps) => {
    const onSaveName = (user: User, name: string) => {
        const [first_name, last_name] = name.split(' ');

        onUserSave({
            ...user,
            first_name,
            last_name,
        });
    }

    return (
        <section>
            { users.map((user, index) => (
                <UserCard
                    avatar={user.avatar}
                    date={user.date}
                    key={user.id}
                    name={`${user.first_name} ${user.last_name}`}
                    onDelete={() => null}
                    onSave={(name: string) => onSaveName(user, name)}
                />
            ))}
        </section>
    );
}

export default UserList;
