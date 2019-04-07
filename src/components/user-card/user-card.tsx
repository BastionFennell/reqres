import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserCardProps } from './types';

import UserInfo from './user-info';
import UserActions from './user-actions';

const StyledUserActions = styled(UserActions)`
`;

const Article = styled.article`
    border: 1px solid black;
    border-top: none;
    display: flex;
    height: 75px;
    width: 300px;

    &:first-of-type, &:nth-of-type(2) {
        border-top: 1px solid black;
    }

    @media (max-width: 663px) {
        &:nth-of-type(2) {
            border-top: none;
        }
    }

    &:hover ${StyledUserActions} {
        opacity: 1;
    }
`;

const Avatar = styled.img`
    height: 40px;
    padding-top: 15px;
    padding-left: 15px;
    width: 40px;
`;

const UserCard = ({
    avatar,
    date,
    first_name,
    last_name,
    onDelete,
    onSave,
} : UserCardProps) => {
    const [editing, setEditing] = useState(false);
    const [unsavedName, setUnsavedName] = useState(`${first_name} ${last_name}`);
    const [unsavedDate, setUnsavedDate] = useState(date);

    useEffect(() => {
        setUnsavedName(`${first_name} ${last_name}`);
    }, [first_name, last_name]);

    useEffect(() => {
        setUnsavedDate(date);
    }, [date]);

    const onClickSave = () => {
        const [first_name, last_name] = unsavedName.split(' ');
        onSave(first_name || '', last_name || '', unsavedDate);
        setUnsavedName(`${first_name || ''} ${last_name || ''}`);
        setEditing(false);
    };

    const onClickCancel = () => {
        setUnsavedName(`${first_name} ${last_name}`);
        setEditing(false);
    };

    return (
        <Article data-testid="user-card">
            <Avatar alt={name} src={avatar} />
            <UserInfo
                name={unsavedName}
                date={unsavedDate}
                editing={editing}
                onChangeName={setUnsavedName}
                onChangeDate={setUnsavedDate}
            />
            <StyledUserActions
                editing={editing}
                onSave={onClickSave}
                onCancel={onClickCancel}
                onDelete={onDelete}
                onEdit={() => setEditing(true)}
            />
        </Article>
    );
}

export default UserCard;
