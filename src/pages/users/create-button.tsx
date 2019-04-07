import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.button`
    align-items: center;
    background: none;
    border: 1px solid black;
    display: flex;
    font-size: 24px;
    height: 75px;
    justify-content: flex-start;
    width: 300px;
`;

const AddBox = styled.div`
    border: 2px solid black;
    display: flex;
    height: 30px;
    justify-content: space-around;
    margin: 15px;
    width: 30px;
`

const CreateButton = (props: any) => (
    <Container {...props}>
        <AddBox>
            <div> + </div>
        </AddBox>
        Create New
    </Container>
)

export default CreateButton;
