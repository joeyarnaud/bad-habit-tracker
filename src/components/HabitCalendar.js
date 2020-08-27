import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import CalendarPicker from 'react-native-calendar-picker';

function HabitCalendar(props) {
  const { selectDate } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date Started *</Text>
      <View style={styles.calendarContainer}>
        <CalendarPicker width={300} onDateChange={selectDate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {},
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  calendarContainer: {
    // width: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
});

HabitCalendar.propTypes = {
  selectDate: PropTypes.func.isRequired,
};

export default HabitCalendar;
