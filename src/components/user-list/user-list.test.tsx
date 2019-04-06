import React from 'react';
import { render, queryAllByTestId } from "react-testing-library";

import UserList from './user-list';

it('renders without crashing', () => {
    const { container } = render(<UserList users={[]}/>);
    expect(container).not.toBeNull();
});

it('renders no users when there are no users', () => {
    const { container } = render(<UserList users={[]}/>);
    const userCards = queryAllByTestId(container, 'user-card');
    expect(userCards).toHaveLength(0);

});

it('renders one user when there is one user', () => {
    const users = [{
        id: 1,
        name: 1,
        date: 1,
    }];
    const { container } = render(<UserList users={users}/>);
    const userCards = queryAllByTestId(container, 'user-card');
    expect(userCards).toHaveLength(1);
});

it('renders multiple users when there are multiple users', () => {
    const users = [{
        id: 1,
        name: 1,
        date: 1,
    }, {
        id: 2,
        name: 2,
        date: 2,
    }, {
        id: 3,
        name: 3,
        date: 3,
    }];
    const { container } = render(<UserList users={users}/>);
    const userCards = queryAllByTestId(container, 'user-card');
    expect(userCards).toHaveLength(3);
});
