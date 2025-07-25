import React from 'react';
import { Modal } from 'react-native';

const BrainboxModal = ({ children, ...rest }) => {
  return (
    <Modal
      transparent
      statusBarTranslucent
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default BrainboxModal;
