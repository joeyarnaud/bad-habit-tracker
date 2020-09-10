import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { isMetric, isWeight } from './calculateEffects';
import {
  MILLIGRAMS,
  GRAMS,
  KILOGRAMS,
  METRIC_TONNE,
  METER,
  KILOMETER,
} from './constants';

const metricUnits = [
  MILLIGRAMS,
  GRAMS,
  KILOGRAMS,
  METRIC_TONNE,
  METER,
  KILOMETER,
];

const merticWeights = [MILLIGRAMS, GRAMS, KILOGRAMS, METRIC_TONNE];

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
    return null;
  } else {
    return <Text style={styles.standard}>{unit}</Text>;
  }
};

export const mostAppropriateUnit = (amount, unit) => {
  if (isMetric(unit)) {
    if (isWeight(unit)) {
      let tempAmount = amount;
      let index = merticWeights.findIndex((a) => unit === a);
      if (tempAmount >= 1) {
        return [tempAmount, unit];
      }
      while (tempAmount < 1 && index > 0) {
        tempAmount *= 1000;
        index--;
      }
      return [tempAmount, metricUnits[index]];
    }
  }
  return [amount, unit];
};

const styles = StyleSheet.create({
  index: {
    fontSize: 10,
    textAlignVertical: 'top',
  },
  indexContainer: {},
  standard: {
    fontSize: 11,
    textAlignVertical: 'bottom',
    marginBottom: 3,
  },
});
