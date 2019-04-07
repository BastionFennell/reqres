import React from 'react';
import { cleanup, render, fireEvent, getByTestId} from "react-testing-library";

import CreateUserModal from './create-user-modal';

beforeEach(() => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
})

afterEach(cleanup);

it('renders without crashing', () => {
    const { container } = render(<CreateUserModal onCreate={jest.fn} onCancel={jest.fn} />);
    expect(container).not.toBeNull();
});

it("Hides the modal when you click the background", () => {
    const onCancel = jest.fn();
    const { container } = render(<CreateUserModal onCreate={jest.fn} onCancel={onCancel} />);
    const background = getByTestId(document, "background");
    fireEvent.click(background);
    expect(onCancel).toHaveBeenCalled();
});

it("Does not hide the modal when you click the foreground", () => {
    const onCancel = jest.fn();
    const { container } = render(<CreateUserModal onCreate={jest.fn} onCancel={onCancel} />);
    const background = getByTestId(document, "foreground");
    fireEvent.click(background);
    expect(onCancel).not.toHaveBeenCalled();
});
