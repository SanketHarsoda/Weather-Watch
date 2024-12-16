import React from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';

const CustomLoader = ({isVisible}: {isVisible: boolean}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <ActivityIndicator style={styles.indicatorStyle} size="large" />
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
