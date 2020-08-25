import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Select from './Select';
import TextInput from './TextInput';

const CHANGE_EFFECT = 'CHANGE_EFFECT';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_UNIT = 'CHANGE_UNIT';
const CHANGE_TIME = 'CHANGE_TIME';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_EFFECT:
      return {
        ...state,
        effect: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case CHANGE_AMOUNT:
      if (
        action.payload.match(/([0-9].?[0-9]*)/g) ||
        action.payload.length === 0
      ) {
        return {
          ...state,
          amount: action.payload,
        };
      } else {
        return state;
      }
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_UNIT:
      return {
        ...state,
        unit: action.payload,
      };
    case CHANGE_TIME:
      return {
        ...state,
        time: action.payload,
      };
  }
};

function AddEffect(props) {
  const [state, dispatch] = useReducer(reducer, {
    effect: 'N/A',
    category: 'N/A',
    amount: '',
    name: '',
    unit: 'N/A',
    time: 'N/A',
  });

  const { effect, category, amount, name, unit, time } = state;
  const { effectNumber, submit } = props;

  return (
    <View>
      <Text style={styles.effectTitle}>Effect #{effectNumber}</Text>
      <View style={styles.effectContainer}>
        <Select
          value={effect}
          label='Effect'
          handleChange={(value) =>
            dispatch({ type: CHANGE_EFFECT, payload: value })
          }
          items={[
            { label: 'Not Applicable', value: 'N/A' },
            { label: 'Save', value: 'Save' },
            { label: 'Avoid', value: 'Avoid' },
            { label: 'Do', value: 'Do' },
          ]}
        />

        <Select
          value={category}
          label='Effect On'
          handleChange={(value) =>
            dispatch({ type: CHANGE_CATEGORY, payload: value })
          }
          items={[
            { label: 'Not Applicable', value: 'N/A' },
            { label: 'Other', value: 'Other' },
            { label: 'Health', value: 'Health' },
            { label: 'Finance', value: 'Finance' },
            { label: 'Time', value: 'Time' },
            { label: 'Environment', value: 'Environment' },
          ]}
        />

        <TextInput
          placeholder='amount'
          value={amount}
          label='Amount'
          handleChange={(e) =>
            dispatch({ type: CHANGE_AMOUNT, payload: e.target.value })
          }
        />
        <Select
          value={unit}
          label='Unit'
          handleChange={(value) =>
            dispatch({ type: CHANGE_UNIT, payload: value })
          }
          items={[
            { label: 'Not Applicable', value: 'N/A' },
            { label: 'Milligrams', value: 'mg' },
            { label: 'Grams', value: 'g' },
            { label: 'Kilograms', value: 'kg' },
            { label: 'Metric Tonne', value: 'T' },
            { label: 'Dollars', value: '$' },
            { label: 'Second', value: 's' },
            { label: 'Minute', value: 'm' },
            { label: 'Hour', value: 'h' },
            { label: 'Day', value: 'd' },
            { label: 'Month', value: 'M' },
            { label: 'Year', value: 'y' },
            { label: 'Calories', value: 'cKal' },
            { label: 'Kilojoules', value: 'kJ' },
            { label: 'Meter', value: 'm(meter)' },
            { label: 'Kilometer', value: 'km' },
            { label: 'Litre', value: 'l' },
            { label: 'Watt', value: 'w' },
            { label: 'Kilowatt', value: 'kw' },
          ]}
        />
        <TextInput
          placeholder='name'
          value={name}
          label='Name'
          handleChange={(e) =>
            dispatch({ type: CHANGE_NAME, payload: e.target.value })
          }
        />
        <Select
          value={time}
          label='Per Time'
          handleChange={(value) =>
            dispatch({ type: CHANGE_TIME, payload: value })
          }
          items={[
            { label: 'Not Applicable', value: 'N/A' },
            { label: 'Second', value: 's' },
            { label: 'Minute', value: 'm' },
            { label: 'Hour', value: 'h' },
            { label: 'Day', value: 'd' },
            { label: 'Month', value: 'M' },
            { label: 'Year', value: 'y' },
          ]}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => submit({ effect, category, amount, name, unit, time })}
        >
          <Text style={styles.submitText}>Submit Effect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  effectContainer: {
    backgroundColor: '#A0A0A0',
    padding: 10,
    borderRadius: 5,
  },
  effectTitle: {
    fontSize: '700',
    textAlign: 'center',
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: '#8AFA96',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: 'center',
  },
  submitText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});

AddEffect.propTypes = {
  effectNumber: PropTypes.number.isRequired,
};

export default AddEffect;
