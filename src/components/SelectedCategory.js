import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { NA } from '../helpers/constants';

function SelectedCategory(props) {
  const { val, handleChange } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{val}</Text>
      {val !== NA && (
        <TouchableOpacity onPress={() => handleChange()}>
          <FontAwesome name='times-circle' style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 15,
    color: '#fff',
  },
  container: {
    backgroundColor: '#449CB8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: 130,
    marginTop: 5,
    marginRight: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

SelectedCategory.propTypes = {
  val: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectedCategory;
