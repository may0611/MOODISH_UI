import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

function SubmitButton() {
  const navigation = useNavigation(); // Initialize the navigation hook

  // Function to handle button press and navigate to SigninSuccess
  const handlePress = () => {
    navigation.navigate("SigninSuccess"); // Navigate to SigninSuccess screen
  };

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={handlePress} // Call the function when the button is pressed
      accessibilityRole="button"
      accessibilityLabel="Submit form"
    >
      <Text style={styles.buttonText}>다음</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 11,
    alignSelf: "center",
    marginTop: 100,
    paddingLeft: 130,
    paddingRight: 130,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor: "#FD7D7D",
  },
  buttonText: {
    color: "rgba(0, 0, 0, 1)",
  }
});

export default SubmitButton;
