import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import isEmpty from '../helpers/is-empty';
import SelectedCategory from './SelectedCategory';

function Select(props) {
  const { value, error, label, handleChange, items } = props;

  return (
    <View style={styles.container}>
      {!isEmpty(label) && <Text style={styles.label}>{label}</Text>}
      <Picker
        selectedValue={
          typeof value === 'string' ? value : value[value.length - 1]
        }
        onValueChange={(value, index) => handleChange(value)}
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
      {typeof value !== 'string' && (
        <View style={styles.flex}>
          {value.map((val) => {
            return (
              <SelectedCategory
                handleChange={() => handleChange(val)}
                key={val}
                val={val}
              />
            );
          })}
        </View>
      )}

      {!isEmpty(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 3,
  },
  input: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  error: {},
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pickerStyles: {
    height: 35,
    borderWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

Select.propTypes = {
  // value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  error: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default Select;
