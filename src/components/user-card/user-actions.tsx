import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserActionsProps } from './types';

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

const UserActions= ({className, editing, onSave, onCancel, onDelete, onEdit} : UserActionsProps) => {
    if(editing) {
        return (
            <EditingActions className={className}>
                <ActionButton
                    onClick={onSave}
                >
                    <CheckIcon></CheckIcon>
                </ActionButton>
                <ActionButton
                    onClick={onCancel}
                >
                    <CancelIcon></CancelIcon>
                </ActionButton>
            </EditingActions>
        );
    }

   return (
       <Actions className={className}>
           <ActionButton onClick={onEdit}>
               <PencilIcon></PencilIcon>
           </ActionButton>
           <ActionButton onClick={onDelete}>
               <TrashIcon></TrashIcon>
           </ActionButton>
       </Actions>
   );
}

export default UserActions;
