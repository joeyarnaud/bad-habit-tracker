import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { mapToIconiconNameAndColor } from '../helpers/icon';
import { formatUnit, mostAppropriateUnit } from '../helpers/unitFormatter';

function DashboardEffectSummary(props) {
  const { name, amount, unit, effect } = props;
  const { iconName, color } = mapToIconiconNameAndColor(name);
  const [newAmount, newUnit] = mostAppropriateUnit(amount, unit);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FontAwesome5 name={iconName} style={[styles.icon, { color: color }]} />
      <Text style={styles.amount}>
        {effect}:{' '}
        <Text style={styles.row}>
          {unit.includes('$') ? (
            <React.Fragment>
              {formatUnit(newUnit)}
              <Text>{Math.round(newAmount * 100) / 100}</Text>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Text>{Math.round(newAmount * 100) / 100}</Text>
              {formatUnit(newUnit)}
            </React.Fragment>
          )}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 50,
    textAlign: 'center',
  },
  amount: {
    textAlign: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default DashboardEffectSummary;
