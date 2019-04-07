import React, { Component } from 'react';

import { User } from 'src/state/users/types';
import { UserListProps } from './types';

import UserCard from 'src/components/user-card';

const UserList = ({
    onUserSave,
    onUserDelete,
    users,
}: UserListProps) => {
    const onSaveName = (index: number, user: User) => (first_name: string, last_name: string) => (
        onUserSave(index, {
            ...user,
            first_name,
            last_name,
        })
    )

    return (
        <section>
            { users.map((user, index) => (
                <UserCard
                    avatar={user.avatar}
                    date={user.date}
                    key={user.id}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    onDelete={() => onUserDelete(index, user)}
                    onSave={onSaveName(index, user)}
                />
            ))}
        </section>
    );
}

export default UserList;
