import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function HabitSummary(props) {
  const { name, icon } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text>{icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
  },
});

HabitSummary.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default HabitSummary;
