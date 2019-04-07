import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserCardProps } from './types';

const Article = styled.article`
    border: 1px solid black;
    border-top: none;
    display: flex;
    height: 75px;
    width: 300px;

    &:first-of-type, &:nth-of-type(2) {
        border-top: 1px solid black;
    }
`;

const Avatar = styled.img`
    height: 40px;
    padding-top: 15px;
    padding-left: 15px;
    width: 40px;
`;

const InfoText = styled.section`
    flex-grow: 1;
    padding: 15px 10px;
`;

const Name = styled.p`
    font-size: 24px;
    margin: 0;
`;

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    padding: 0;
    width: 100%;
`;

const NameInput = styled(Input)`
    font-size: 24px;
`;

const Actions = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px;
`;

const ActionButton = styled.button`
    background: none;
    border: 2px solid black;
    box-sizing: border-box;
    display: block;
    height: 34px;
    outline: none;
    width: 34px;
`;

const CheckIcon = styled.i.attrs({
    className: 'fas fa-check',
})`
    color: green;
    font-size: 18px;
`;

const CancelIcon = styled.i.attrs({
    className: 'fas fa-times',
})`
    color: red;
    font-size: 20px;
    padding-top: 3px;
`;

const PencilIcon = styled.i.attrs({
    className: 'fas fa-pencil-alt',
})`
    font-size: 18px;
`;

const TrashIcon = styled.i.attrs({
    className: 'fas fa-trash-alt',
})`
    font-size: 18px;
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

    useEffect(() => {
        setUnsavedName(`${first_name} ${last_name}`);
    }, [first_name, last_name]);

    const onClickSave = () => {
        const [first_name, last_name] = unsavedName.split(' ');
        onSave(first_name, last_name);
        setUnsavedName(`${first_name} ${last_name}`);
        setEditing(false);
    };

    const onClickCancel = () => {
        setUnsavedName(`${first_name} ${last_name}`);
        setEditing(false);
    };

    return (
        <Article data-testid="user-card">
            <Avatar alt={name} src={avatar} />
            <InfoText>
                {editing ? (
                    <NameInput
                        data-testid="name-field"
                        onChange={(e: any) => setUnsavedName(e.target.value)}
                        type="text"
                        value={unsavedName}
                    />
                ) : (
                    <React.Fragment>
                        <Name> {unsavedName} </Name>
                        {date}
                    </React.Fragment>
                )}
            </InfoText>
            <Actions>
                {editing ? (
                    <React.Fragment>
                        <ActionButton
                            onClick={onClickSave}
                        >
                            <CheckIcon></CheckIcon>
                        </ActionButton>
                        <ActionButton
                            onClick={onClickCancel}
                        >
                            <CancelIcon></CancelIcon>
                        </ActionButton>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <ActionButton onClick={() => setEditing(true)}>
                            <PencilIcon></PencilIcon>
                        </ActionButton>
                        <ActionButton onClick={onDelete}>
                            <TrashIcon></TrashIcon>
                        </ActionButton>
                    </React.Fragment>
                )}
            </Actions>
        </Article>
    );
}

export default UserCard;
