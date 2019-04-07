import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './types';

class Modal extends React.Component<ModalProps> {
    el: HTMLElement;

    constructor(props: ModalProps) {
        super(props);
        this.el = document.createElement('section');
    }

    componentDidMount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot && modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot && modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default Modal;
