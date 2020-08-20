import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Select from '../components/Select';
import TextInput from '../components/TextInput';
import SuggestedHabits from '../components/SuggestedHabits';

const NAME_CHANGE = 'NAME_CHANGE';
const CATEGORY_CHANGE = 'CATEGORY_CHANGE';

const reducer = (state, action) => {
  switch (action.type) {
    case NAME_CHANGE:
      return {
        ...state,
        name: action.payload,
      };
    case CATEGORY_CHANGE:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

function CreateScreen() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    category: 'health',
    error: { name: '' },
  });
  const { name, category, error } = state;
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Track Habit Reduction</Text>

      <SuggestedHabits />
      <Text style={styles.separator}>Or</Text>
      <TextInput
        placeholder='Habit Name'
        value={name}
        error={error.name}
        label='Habit Name'
        handleChange={(e) =>
          dispatch({ type: NAME_CHANGE, payload: e.target.value })
        }
      />

      <Select
        value={category}
        label='What does this habit effect most?'
        handleChange={(value) =>
          dispatch({ type: CATEGORY_CHANGE, payload: value })
        }
        items={[
          { label: 'Health', value: 'health' },
          { label: 'Finance', value: 'finance' },
          { label: 'Time', value: 'time' },
          { label: 'Environment', value: 'environment' },
          { label: 'Other', value: 'other' },
        ]}
      />

      <Picker style={styles.pickerStyles}>
        <Picker.Item label='Positive' value='positive' />
        <Picker.Item label='Negative' value='negative' />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyles: {},
  screenContainer: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '900',
  },
  separator: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default CreateScreen;
