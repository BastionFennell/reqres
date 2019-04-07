import React, { useState }from 'react';
import styled from 'styled-components';

export const ModalBackground = styled.div`
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

export const ModalForeground = styled.aside`
    background: white;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
`;

export const ModalHeader = styled.section`
    align-items: center;
    border-bottom: 1px solid black;
    display: flex;
    height: 50px;

    h2 {
        margin: 0;
        padding-left: 15px;
    }
`;

export const ModalBody = styled.section`
    flex-grow: 1;
    padding: 15px 20px;
`;

export const ModalActions = styled.section`
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid black;
    display: flex;
    height: 50px;
`;

export const ModalButton = styled.button`
    background: none;
    border: 2px solid black;
    font-size: 20px;
    height: 40px;
    margin-right: 15px;
    outline: none;
    width: 80px;
`
