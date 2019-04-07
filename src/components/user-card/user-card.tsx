import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dateFns from 'date-fns';

import { UserCardProps } from './types';

const Actions = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.2s ease;
    padding: 3px;

    &:hover {
        opacity: 1;
    }
`;

const EditingActions = styled(Actions)`
    opacity: 1;
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

    &:hover ${Actions} {
        opacity: 1;
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

const DateString = styled.p`
    font-size: 12px;
    margin: 0;
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

const DateInput = styled(Input).attrs({
    type: 'date',
})`
    font-size: 12px;
`;

const NameInput = styled(Input).attrs({
    type: 'text',
})`
    font-size: 24px;
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

    const viewableDate = (dateString: string): string => dateFns.format(dateString, 'MM/DD/YYYY');

    return (
        <Article data-testid="user-card">
            <Avatar alt={name} src={avatar} />
            <InfoText>
                {editing ? (
                    <React.Fragment>
                        <NameInput
                            data-testid="name-field"
                            onChange={(e: any) => setUnsavedName(e.target.value)}
                            value={unsavedName}
                        />
                        <DateInput
                            data-testid="date-field"
                            onChange={(e: any) => setUnsavedDate(e.target.value)}
                            value={unsavedDate}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Name> {unsavedName} </Name>
                        <DateString> {viewableDate(unsavedDate)} </DateString>
                    </React.Fragment>
                )}
            </InfoText>
            {editing ? (
                <EditingActions>
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
                </EditingActions>
            ) : (
                <Actions>
                    <ActionButton onClick={() => setEditing(true)}>
                        <PencilIcon></PencilIcon>
                    </ActionButton>
                    <ActionButton onClick={onDelete}>
                        <TrashIcon></TrashIcon>
                    </ActionButton>
                </Actions>
            )}
        </Article>
    );
}

export default UserCard;
