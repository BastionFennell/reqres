import React, { Component } from 'react';
import styled from 'styled-components';
import dateFns from 'date-fns';

import { User } from 'src/state/users/types';
import { UserListProps } from './types';

import UserCard from 'src/components/user-card';

const ListSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const UserList = ({
    onUserSave,
    onUserDelete,
    users,
}: UserListProps) => {
    const onSave = (index: number, user: User) => (first_name: string, last_name: string, userDate: string) => (
        onUserSave(index, {
            ...user,
            userDate,
            first_name,
            last_name,
        })
    )

    const userDate = (user: User) => dateFns.format(user.userDate || Date.now(), 'YYYY-MM-DD');

    return (
        <ListSection>
            { users.map((user, index) => (
                <UserCard
                    avatar={user.avatar}
                    date={userDate(user)}
                    key={user.id}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    onDelete={() => onUserDelete(index, user)}
                    onSave={onSave(index, user)}
                />
            ))}
        </ListSection>
    );
}

export default UserList;
