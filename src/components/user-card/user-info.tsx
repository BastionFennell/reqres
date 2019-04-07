import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dateFns from 'date-fns';

import { UserInfoProps } from './types';

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

const UserInfo = ({name, date, editing, onChangeDate, onChangeName} : UserInfoProps) => {
    const viewableDate = (dateString: string): string => dateFns.format(dateString, 'MM/DD/YYYY');

    if(editing) {
       return  (
            <InfoText>
                <NameInput
                    data-testid="name-field"
                    onChange={(e: any) => onChangeName(e.target.value)}
                    value={name}
                />
                <DateInput
                    data-testid="date-field"
                    onChange={(e: any) => onChangeDate(e.target.value)}
                    value={date}
                />
            </InfoText>
        );
    }

    return (
        <InfoText>
            <Name> {name} </Name>
            <DateString> {viewableDate(date)} </DateString>
        </InfoText>
    );
}

export default UserInfo;
