import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SuggestedHabits from '../components/SuggestedHabits';

function CreateScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Track Habit Reduction</Text>

      <SuggestedHabits />
      <Text style={styles.separator}>Or</Text>
      <TouchableOpacity
        style={styles.buttonContainerStyles}
        onPress={() => navigation.navigate('custom')}
      >
        <Text style={styles.buttonTextStyles}>Create Custom Habit</Text>
      </TouchableOpacity>
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
  buttonTextStyles: {
    fontWeight: '900',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
  buttonContainerStyles: {
    backgroundColor: '#3696F3',

    borderRadius: 5,
  },
});

export default CreateScreen;
