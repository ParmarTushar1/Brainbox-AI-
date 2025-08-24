import React from 'react';
import { Modal } from 'react-native';

const BrainboxModal = ({
  children,
  visible = false,
  animationType = 'fade',
  transparent = true,
  statusBarTranslucent = true,
  onRequestClose,
  ...rest
}) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      statusBarTranslucent={statusBarTranslucent}
      onRequestClose={onRequestClose}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default BrainboxModal;
