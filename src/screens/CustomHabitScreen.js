import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import TextInput from '../components/TextInput';
import Select from '../components/Select';
import AddEffect from '../components/AddEffect';
import EffectSummary from '../components/EffectSummary';

const NAME_CHANGE = 'NAME_CHANGE';
const POSITIVE_OR_NEGATIVE = 'POSITIVE_OR_NEGATIVE';
const ADD_EFFECT = 'ADD_EFFECT';
const SUBMIT_EFFECT = 'SUBMIT_EFFECT';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case NAME_CHANGE:
      return {
        ...state,
        name: action.payload,
      };
    case POSITIVE_OR_NEGATIVE:
      return {
        ...state,
        positiveOrNegative: action.payload,
      };
    case ADD_EFFECT:
      return {
        ...state,
        addingEffect: true,
      };
    case SUBMIT_EFFECT:
      return {
        ...state,
        effects: [
          ...state.effects,
          { ...action.payload, index: state.effects.length },
        ],
        addingEffect: false,
      };
    default:
      return state;
  }
};

function CustomHabitScreen() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    positiveOrNegative: 'Positive',
    effects: [],
    addingEffect: false,
    error: { name: '', positiveOrNegative: '', effects: '' },
  });
  const { name, positiveOrNegative, effects, addingEffect, error } = state;
  console.log(state);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Create Habit</Text>
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
        value={positiveOrNegative}
        label='Is this habit positive or negative?'
        handleChange={(value) =>
          dispatch({ type: POSITIVE_OR_NEGATIVE, payload: value })
        }
        items={[
          { label: 'Positive', value: 'Positive' },
          { label: 'Negative', value: 'Negative' },
        ]}
      />

      {!addingEffect && (
        <React.Fragment>
          {effects.map((effect) => {
            return (
              <EffectSummary
                key={
                  effect.effect +
                  effect.category +
                  effect.amount +
                  effect.name +
                  effect.unit +
                  effect.time
                }
                effect={effect.effect}
                category={effect.category}
                amount={effect.amount}
                name={effect.name}
                unit={effect.unit}
                time={effect.time}
              />
            );
          })}
          <TouchableOpacity
            onPress={() => dispatch({ type: ADD_EFFECT })}
            style={styles.addEffectContainer}
          >
            <Text style={styles.addEffectText}>Add Effect</Text>
            <FontAwesome name='plus-circle' style={styles.icon} />
          </TouchableOpacity>
        </React.Fragment>
      )}

      {addingEffect && (
        <AddEffect
          effectNumber={effects.length + 1}
          submit={(payload) =>
            dispatch({ type: SUBMIT_EFFECT, payload: payload })
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '900',
  },
  addEffectContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
  addEffectText: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
  },
  icon: {
    fontSize: 24,
  },
});

export default CustomHabitScreen;
