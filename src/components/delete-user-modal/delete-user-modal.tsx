import React, { useState }from 'react';
import styled from 'styled-components';

import { UserModalProps } from './types';

import Modal from 'src/components/modal';

const ModalBackground = styled.div`
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    height: 100vh;
    justify-content: space-around;
    left: 0;
    width: 100vw;
    position: absolute;
    top: 0;
`;

const ModalForeground = styled.aside`
    background: white;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
`;

const ModalHeader = styled.section`
    align-items: center;
    border-bottom: 1px solid black;
    display: flex;
    height: 50px;

    h2 {
        margin: 0;
        padding-left: 15px;
    }
`;

const ModalBody = styled.section`
    flex-grow: 1;
    padding: 15px 20px;
`;

const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-size: 20px;

    input {
        font-size: 20px;
        border: none;
        border-bottom: 2px solid black;
        text-overflow: ellipsis;
        width: 70%;
    }
`

const ModalActions = styled.section`
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid black;
    display: flex;
    height: 50px;
`;

const ModalButton = styled.button`
    background: none;
    border: 2px solid black;
    font-size: 20px;
    height: 40px;
    margin-right: 15px;
    outline: none;
    width: 80px;
`

const DeleteButton = styled(ModalButton)`
    border-color: red;
`;

const UserModal = ({ onDelete, onCancel, user }: UserModalProps) => {
    return (
        <Modal>
            <ModalBackground data-testid="background" onClick={() => onCancel()}>
                <ModalForeground data-testid="foreground" onClick={(e: any) => e.stopPropagation()}>
                    <ModalHeader>
                        <h2> Delete User </h2>
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            Are you sure you want to delete <strong>{user.first_name} {user.last_name}</strong>?
                        </p>
                    </ModalBody>
                    <ModalActions>
                        <ModalButton onClick={() => onCancel()}> Cancel </ModalButton>
                        <DeleteButton onClick={() => onDelete()}> Delete </DeleteButton>
                    </ModalActions>
                </ModalForeground>
            </ModalBackground>
        </Modal>
    )
}

export default UserModal
