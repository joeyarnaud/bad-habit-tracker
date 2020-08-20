import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import isEmpty from '../helpers/is-empty';

function Select(props) {
  const { value, error, label, handleChange, items } = props;
  return (
    <View style={styles.container}>
      {!isEmpty(label) && <Text style={styles.label}>{label}</Text>}
      <Picker
        onValueChange={(value, index) => handleChange(value)}
        selectedValue={value}
        style={styles.pickerStyles}
      >
        {!isEmpty(items) &&
          items.map((item) => {
            return (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            );
          })}
      </Picker>
      {!isEmpty(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  error: {},
});

Select.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Select;
