import { useState } from 'react';
import Modal from './modal';
import "./modal.css";
export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToogleModalPopup() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={handleToogleModalPopup}>Open Modal Popup</button>
      {isOpen && (
        <Modal
          id={'custom-id'}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </>
  );
}
