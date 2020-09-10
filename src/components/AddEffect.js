import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Select from './Select';
import TextInput from './TextInput';
import isEmpty from '../helpers/is-empty';
import {
  NA,
  SAVE,
  AVOID,
  DO,
  HEALTH,
  FINANCE,
  ENVIRONMENT,
  MILLIGRAMS,
  GRAMS,
  KILOGRAMS,
  METRIC_TONNE,
  DOLLARS,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
  CALORIES,
  KILOJOULES,
  METER,
  KILOMETER,
  LITRE,
  WATT,
  KILOWATT,
  OTHER,
  TIME,
} from '../helpers/constants';

const CHANGE_EFFECT = 'CHANGE_EFFECT';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_UNIT = 'CHANGE_UNIT';
const CHANGE_TIME = 'CHANGE_TIME';

const reducer = (state, action) => {
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
    effect: NA,
    category: NA,
    amount: '',
    name: '',
    unit: NA,
    time: NA,
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
            { label: 'Not Applicable', value: NA },
            { label: 'Save', value: SAVE },
            { label: 'Avoid', value: AVOID },
            { label: 'Do', value: DO },
          ]}
        />

        <Select
          value={category}
          label='Effect On'
          handleChange={(value) =>
            dispatch({ type: CHANGE_CATEGORY, payload: value })
          }
          items={[
            { label: 'Not Applicable', value: NA },
            { label: 'Other', value: OTHER },
            { label: 'Health', value: HEALTH },
            { label: 'Finance', value: FINANCE },
            { label: 'Time', value: TIME },
            { label: 'Environment', value: ENVIRONMENT },
          ]}
        />

        <TextInput
          placeholder='amount'
          value={amount}
          label='Amount*'
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
            { label: 'Not Applicable', value: NA },
            { label: 'Milligrams', value: MILLIGRAMS },
            { label: 'Grams', value: GRAMS },
            { label: 'Kilograms', value: KILOGRAMS },
            { label: 'Metric Tonne', value: METRIC_TONNE },
            { label: 'Dollars', value: DOLLARS },
            { label: 'Second', value: SECOND },
            { label: 'Minute', value: MINUTE },
            { label: 'Hour', value: HOUR },
            { label: 'Day', value: DAY },
            { label: 'Month', value: MONTH },
            { label: 'Year', value: YEAR },
            { label: 'Calories', value: CALORIES },
            { label: 'Kilojoules', value: KILOJOULES },
            { label: 'Meter', value: METER },
            { label: 'Kilometer', value: KILOMETER },
            { label: 'Litre', value: LITRE },
            { label: 'Watt', value: WATT },
            { label: 'Kilowatt', value: KILOWATT },
          ]}
        />
        <TextInput
          placeholder='name'
          value={name}
          label='Name*'
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
            { label: 'Not Applicable', value: NA },
            { label: 'Second', value: SECOND },
            { label: 'Minute', value: MINUTE },
            { label: 'Hour', value: HOUR },
            { label: 'Day', value: DAY },
            { label: 'Week', value: WEEK },
            { label: 'Month', value: MONTH },
            { label: 'Year', value: YEAR },
          ]}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => submit({ effect, category, amount, name, unit, time })}
          disabled={isEmpty(name) || isEmpty(amount)}
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
    fontWeight: '700',
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
