import React from 'react';
import { render, fireEvent, getByTestId, queryByTestId, queryAllByTestId} from "react-testing-library";

import UserCard from './user-card';

it('renders without crashing', () => {
    const { container } = render(<UserCard name="test" date="1/1/1111" onChange={() => null}  />);
    expect(container).not.toBeNull();
});

it("Loads with initial state of not editing", () => {
    const { container } = render(<UserCard name="test" date="1/1/1111" onChange={() => null}  />);
    const nameField = queryAllByTestId(container, "name-field");
    expect(nameField).toHaveLength(0);
});

it("Switches to editing when clicked", () => {
    const { container } = render(<UserCard name="test" date="1/1/1111" onChange={() => null}  />);
    const card = getByTestId(container, 'card');
    fireEvent.click(card);
    const nameField = queryAllByTestId(container, "name-field");
    expect(nameField).not.toBeNull();
});
