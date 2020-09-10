import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function ConfirmationModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    actionText,
    confirmatonText,
    actionColor,
    action,
    buttonTitle,
    buttonStyles,
    iconName,
  } = props;

  return (
    <React.Fragment>
      <TouchableOpacity
        style={{ ...buttonStyles }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>{buttonTitle}</Text>
        <FontAwesome5 name={iconName} style={styles.icon} />
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewStyles}>
            <Text style={styles.title}>{confirmatonText}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: actionColor }}
                onPress={() => {
                  setModalVisible(false);
                  action();
                }}
              >
                <Text style={styles.buttonText}>{actionText}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Entypo style={styles.closeTextStyle} name='circle-with-cross' />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalViewStyles: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 50,
    textAlign: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#C1CEDA',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  closeTextStyle: {
    fontSize: 30,
    color: '#B3564B',
  },
  icon: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 15,
    marginTop: 4,
  },
});

export default ConfirmationModal;
