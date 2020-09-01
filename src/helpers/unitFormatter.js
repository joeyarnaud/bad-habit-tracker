import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const formatUnit = (unit) => {
  if (unit.includes('(^2)')) {
    return (
      <React.Fragment>
        <Text style={styles.standard}>{unit.replace('(^2)', '')}</Text>
        <Text style={styles.index}>2</Text>
      </React.Fragment>
    );
  }
  if (unit.includes('$')) {
    return <Text>$</Text>;
  }
  if (unit.includes('N/A')) {
    return '';
  } else {
    return <Text style={styles.standard}>{unit}</Text>;
  }
};

const styles = StyleSheet.create({
  index: {
    fontSize: 10,
    textAlignVertical: 'top',
  },
  indexContainer: {},
  standard: {
    fontSize: 11,
  },
});
