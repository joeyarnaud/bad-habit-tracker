import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HabitCalendar from './HabitCalendar';

function CalendarResetModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const { action } = props;

  return (
    <React.Fragment>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Reset Streak</Text>
        <FontAwesome5 name='undo' style={styles.icon} />
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewStyles}>
            <Text style={styles.title}>
              Select the new date you started or stopped this habit from
            </Text>
            <HabitCalendar selectDate={(date) => setDate(date)} />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#D9A236' }}
                onPress={() => {
                  setModalVisible(false);
                  action(date);
                }}
              >
                <Text style={styles.buttonText}>
                  Reset{'  '}
                  <FontAwesome5 name='undo' style={{ ...styles.icon }} />
                </Text>
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
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20,
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
  resetButton: {
    flexDirection: 'row',
    backgroundColor: '#D9A236',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default CalendarResetModal;
