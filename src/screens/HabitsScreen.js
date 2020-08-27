import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage, ScrollView } from 'react-native';
import YourHabitSummary from '../components/YourHabitSummary';

function HabitScreen({ navigation }) {
  const [habits, setHabits] = useState([]);

  const getHabits = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const habs = [];
    for (let i = 0; i < keys.length; i++) {
      habs.push(JSON.parse(await AsyncStorage.getItem(keys[i])));
    }
    setHabits(habs);
  };

  useEffect(() => {
    getHabits();
  }, []);

  console.log(habits);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Your Habits</Text>
        <View style={styles.labelContainer}>
          <Text style={styles.text}>Habit Name</Text>
          <Text style={styles.text}>Streak</Text>
        </View>
        {habits.map((habit) => {
          console.log(habit);
          return (
            <YourHabitSummary
              id={habit.id}
              name={habit.name}
              date={habit.date}
              effects={habit.effects}
              key={habit.id}
              handlePress={() => navigation.navigate('habit', { id: habit.id })}
            />
          );
        })}
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
  labelContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default HabitScreen;
