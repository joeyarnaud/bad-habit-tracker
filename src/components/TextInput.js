import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import isEmpty from '../helpers/is-empty';

function Input(props) {
  const { placeholder, value, error, label, handleChange } = props;
  return (
    <View style={styles.container}>
      {!isEmpty(label) && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      {!isEmpty(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  error: {},
});

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
