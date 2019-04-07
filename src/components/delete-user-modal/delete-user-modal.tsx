import React, { useState }from 'react';
import styled from 'styled-components';

import { UserModalProps } from './types';

import Modal from 'src/components/modal';
import {
    ModalBackground,
    ModalForeground,
    ModalHeader,
    ModalBody,
    ModalActions,
    ModalButton,
} from 'src/components/modal/shared-layout';

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
