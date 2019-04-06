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
    padding: 15px;
    width: 300px;

    &:first-of-type {
        border-top: 1px solid black;
    }
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
`;

const InfoText = styled.section`
    padding: 0 10px;
`

const Name = styled.p`
    font-size: 24px;
    margin: 0;
`

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    padding: 0;
`

const NameInput = styled(Input)`
    font-size: 24px;
`

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
        </Article>
    );
}

export default UserCard;
