import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesome5 } from '@expo/vector-icons';
import TextInput from '../components/TextInput';
import HabitCalendar from '../components/HabitCalendar';
import isEmpty from '../helpers/is-empty';

function PremadeHabitScreen(props) {
  const { navigation, route } = props;
  const {
    name,
    icon,
    prompt,
    totalAmount,
    effects,
    positiveOrNegative,
  } = route.params;
  const [total, setTotal] = useState(totalAmount.toString());
  const [date, setDate] = useState(new Date());

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>
          {name}
          {'   '} {<FontAwesome5 name={icon} size={24} color='black' />}
        </Text>
        <TextInput
          placeholder={prompt}
          value={total}
          label={prompt}
          handleChange={(e) => setTotal(e.target.value)}
        />
        <HabitCalendar selectDate={(date) => setDate(date)} />

        <TouchableOpacity
          style={styles.create}
          disabled={
            isEmpty(name) ||
            isEmpty(date) ||
            isEmpty(positiveOrNegative) ||
            isEmpty(totalAmount)
          }
          onPress={() => {
            const id = uuidv4();
            AsyncStorage.setItem(
              `habit-${name}`,
              JSON.stringify({
                id: id,
                name,
                positiveOrNegative,
                effects: effects.map((effect) => {
                  return {
                    ...effect,
                    amount: (effect.amount / totalAmount) * total,
                  };
                }),
                date,
              })
            );
            navigation.reset({ index: 0, routes: [{ name: 'Habits' }] });
          }}
        >
          <Text style={styles.createText}>Create Habit</Text>
        </TouchableOpacity>
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
  create: {
    backgroundColor: '#8AFA96',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  createText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PremadeHabitScreen;
