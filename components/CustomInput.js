import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  input: {
    color: colors.darkText,
    fontSize: 16,
  },
});

export default CustomInput;
