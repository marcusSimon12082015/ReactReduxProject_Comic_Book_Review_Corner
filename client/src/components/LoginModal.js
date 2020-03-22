import React from 'react';
import Modal from 'react-bootstrap/Modal'
import LoginForm from './LoginForm';


export const LoginModal = ({ modalOpen, handleModalClose }) => (
  <Modal
    size="lg"
    show={modalOpen}
    onHide={handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Login to ComicBook Review Corner</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LoginForm onLoginSucces={handleModalClose}></LoginForm>
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>
);
