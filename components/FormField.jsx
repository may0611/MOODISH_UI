import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function FormField({ id, label, marginTop }) {
  return (
    <>
      <View style={[styles.labelContainer, { marginTop }]}>
        <Text style={styles.label} nativeID={`${id}Label`}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        accessibilityLabel={label}
        accessibilityLabelledBy={`${id}Label`}
        secureTextEntry={id.toLowerCase().includes('password')}
      />
      <View style={styles.separator} />
    </>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    marginLeft: 31,
  },
  label: {
    color: "rgba(135, 125, 125, 1)",
  },
  input: {
    marginTop: 1,
    marginLeft: 16,
    width: 279,
    maxWidth: "100%",
  },
  separator: {
    borderColor: "rgba(137, 122, 122, 1)",
    borderStyle: "dashed",
    borderWidth: 0.5,
    marginTop: 1,
    marginLeft: 16,
    width: 279,
   
    
   
  }
});

export default FormField;