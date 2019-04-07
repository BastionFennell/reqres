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

const StyledModalForeground = styled(ModalForeground)`
    height: 300px;
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

const CreateButton = styled(ModalButton)`
    border-color: green;
`;

const CancelButton = styled(ModalButton)`
    border-color: red;
`;

const UserModal = ({ onCreate, onCancel }: UserModalProps) => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');

    return (
        <Modal>
            <ModalBackground data-testid="background" onClick={() => onCancel()}>
                <StyledModalForeground data-testid="foreground" onClick={(e: any) => e.stopPropagation()}>
                    <ModalHeader>
                        <h2> Create User </h2>
                    </ModalHeader>
                    <ModalBody>
                        <FormSection>
                            <label htmlFor="avatar"> Avatar Url</label>
                            <input
                                id="avatar"
                                onChange={(e: any) => setAvatar(e.target.value)}
                                onKeyPress={(e: any) => e.key === 'Enter' && onCreate(name, avatar)}
                                type="text"
                                value={avatar}
                            />
                        </FormSection>
                        <FormSection>
                            <label htmlFor="name"> Name </label>
                            <input
                                id="name"
                                onChange={(e: any) => setName(e.target.value)}
                                onKeyPress={(e: any) => e.key === 'Enter' && onCreate(name, avatar)}
                                type="text"
                                value={name}
                            />
                        </FormSection>
                    </ModalBody>
                    <ModalActions>
                        <CancelButton onClick={() => onCancel()}> Cancel </CancelButton>
                        <CreateButton onClick={() => onCreate(name, avatar)}> Create </CreateButton>
                    </ModalActions>
                </StyledModalForeground>
            </ModalBackground>
        </Modal>
    )
}

export default UserModal
