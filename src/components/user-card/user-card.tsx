import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    avatar: string;
    date: string;
    name: string;
    onChange(e: any): void;
}

const Article = styled.article`
    border: 1px solid black;
    border-top: none;
    display: flex;
    height: 75px;
    width: 300px;

    &:first-of-type {
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
    border: 1px solid black;
    box-sizing: border-box;
    display: block;
    height: 34px;
    outline: none;
    width: 34px;
`;

const UserCard = ({
    avatar,
    date,
    name,
    onChange,
} : Props) => {
    const [editing, setEditing] = useState(false);

    return (
        <Article
            data-testid="user-card"
            onClick={() => !editing && setEditing(!editing)}
        >
            <Avatar alt={name} src={avatar} />
            <InfoText>
                {editing ? (
                    <NameInput
                        data-testid="name-field"
                        onChange={onChange}
                        type="text"
                        value={name}
                    />
                ) : (
                    <React.Fragment>
                        <Name> {name} </Name>
                        {date}
                    </React.Fragment>
                )}
            </InfoText>
            {editing && (
                <Actions>
                    <ActionButton>y</ActionButton>
                    <ActionButton>n</ActionButton>
                </Actions>
            )}
        </Article>
    );
}

export default UserCard;
