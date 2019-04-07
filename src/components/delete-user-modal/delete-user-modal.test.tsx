import React from 'react';
import { cleanup, render, fireEvent, getByTestId} from "react-testing-library";

import DeleteUserModal from './delete-user-modal';

const mockUser = {
    first_name: 'doot',
    last_name: 'mcDoot',
};

beforeEach(() => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
})

afterEach(cleanup);

it('renders without crashing', () => {
    const { container } = render(<DeleteUserModal onDelete={jest.fn} onCancel={jest.fn} user={mockUser} />);
    expect(container).not.toBeNull();
});

it("Hides the modal when you click the background", () => {
    const onCancel = jest.fn();
    const { container } = render(<DeleteUserModal onDelete={jest.fn} onCancel={onCancel} user={mockUser} />);
    const background = getByTestId(document, "background");
    fireEvent.click(background);
    expect(onCancel).toHaveBeenCalled();
});

it("Does not hide the modal when you click the foreground", () => {
    const onCancel = jest.fn();
    const { container } = render(<DeleteUserModal onDelete={jest.fn} onCancel={onCancel} user={mockUser}  />);
    const background = getByTestId(document, "foreground");
    fireEvent.click(background);
    expect(onCancel).not.toHaveBeenCalled();
});
