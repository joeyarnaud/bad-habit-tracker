import React, { useReducer } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';
import TextInput from '../components/TextInput';
import Select from '../components/Select';
import AddEffect from '../components/AddEffect';
import EffectSummary from '../components/EffectSummary';
import HabitCalendar from '../components/HabitCalendar';
import isEmpty from '../helpers/is-empty';

const NAME_CHANGE = 'NAME_CHANGE';
const POSITIVE_OR_NEGATIVE = 'POSITIVE_OR_NEGATIVE';
const SELECT_DATE = 'SELECT_DATE';
const ADD_EFFECT = 'ADD_EFFECT';
const SUBMIT_EFFECT = 'SUBMIT_EFFECT';
const FINISH_HABIT = 'FINISH_HABIT';
const CLEAR_HABIT = 'CLEAR_HABIT';

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
    case SELECT_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case FINISH_HABIT:
      return {
        ...state,
        finished: true,
        id: action.payload,
      };
    case CLEAR_HABIT:
      return {
        name: '',
        positiveOrNegative: 'Positive',
        effects: [],
        addingEffect: false,
        date: new Date(),
        error: { name: '', positiveOrNegative: '', effects: '' },
        finished: true,
      };
    default:
      return state;
  }
};

function CustomHabitScreen({ navigation }) {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    positiveOrNegative: 'Positive',
    effects: [],
    addingEffect: false,
    date: new Date(),
    error: { name: '', positiveOrNegative: '', effects: '' },
    finished: false,
    id: null,
  });
  const {
    name,
    positiveOrNegative,
    effects,
    date,
    addingEffect,
    error,
    finished,
    id,
  } = state;
  console.log(state);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        {!finished ? (
          <React.Fragment>
            <Text style={styles.title}>Create Habit</Text>

            <TextInput
              placeholder='Habit Name *'
              value={name}
              error={error.name}
              label='Habit Name'
              handleChange={(e) =>
                dispatch({ type: NAME_CHANGE, payload: e.target.value })
              }
            />

            <Select
              value={positiveOrNegative}
              label='Is this habit positive or negative? *'
              handleChange={(value) =>
                dispatch({ type: POSITIVE_OR_NEGATIVE, payload: value })
              }
              items={[
                { label: 'Positive', value: 'Positive' },
                { label: 'Negative', value: 'Negative' },
              ]}
            />

            <HabitCalendar
              selectDate={(date) =>
                dispatch({ type: SELECT_DATE, payload: date })
              }
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

            <TouchableOpacity
              style={styles.create}
              disabled={
                isEmpty(name) ||
                isEmpty(date) ||
                isEmpty(positiveOrNegative) ||
                addingEffect
              }
              onPress={() => {
                const id = uuidv4();
                AsyncStorage.setItem(
                  `habit-${id}`,
                  JSON.stringify({
                    id: id,
                    name,
                    positiveOrNegative,
                    effects,
                    date,
                  })
                );
                dispatch({ type: FINISH_HABIT, payload: id });
              }}
            >
              <Text style={styles.createText}>Create Habit</Text>
            </TouchableOpacity>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text style={styles.title}>Habit Created!</Text>
            <TouchableOpacity
              style={styles.createAnother}
              onPress={() => dispatch({ type: CLEAR_HABIT })}
            >
              <Text style={styles.createAnotherText}>Create Another?</Text>
            </TouchableOpacity>
            <Text style={styles.or}>Or</Text>
            <TouchableOpacity
              style={styles.navigate}
              onPress={() => navigation.navigate('habit', id)}
            >
              <Text style={styles.createAnotherText}>View Habit</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  create: {
    backgroundColor: '#8AFA96',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  createText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  createAnother: {
    backgroundColor: '#518DE6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: 'center',
    marginTop: 30,
  },
  createAnotherText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  navigate: {
    backgroundColor: '#8AFA96',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: 'center',
  },
  or: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: '900',
  },
});

export default CustomHabitScreen;
