import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/ui';
import { ContentForm } from './ContentForm';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export const CustomModal = () => {
  
  const dispatch = useDispatch();
  const { modal } = useSelector(state => state.ui);


  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal
        isOpen={modal.open}
        style={customStyles}
        onRequestClose={ handleClose }
        contentLabel="Example Modal"
        appElement={document.getElementById('root')}
      >
        <ContentForm />
      </Modal>
    </div>
  )
}
