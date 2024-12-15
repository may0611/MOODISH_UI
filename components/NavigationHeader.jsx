import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

// Get screen width for responsive layout
const { width } = Dimensions.get("window");

function NavigationHeader() {
  return (
    <View style={styles.header}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/87643f6b95e24685aa12fdac7d93c13d/58750e77895a6202930b9eae32797857163b988bdc7f5ea2cc6ff02cfc16fd0e?apiKey=87643f6b95e24685aa12fdac7d93c13d&",
        }}
        style={styles.backIcon}
        accessibilityLabel="Back button"
      />
      <View>
        <Text style={styles.title}>                     회원가입</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    maxWidth: width, // Set the max width to screen width
    justifyContent: "space-between", // Space out the back icon and title
    padding: 10, // Add padding to make it look spacious
  },
  backIcon: {
    width: width * 0.1, // Adjust width based on screen size (10% of screen width)
    height: undefined, // Ensure height adjusts based on aspect ratio
    aspectRatio: 1.36, // Maintain aspect ratio for the icon
  },
  title: {
    fontFamily: "Judson, sans-serif",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "700",
    fontSize: width * 0.05, // Adjust font size based on screen width (5% of screen width)
    display: "flex",
    width: "1000%", // Full width of the screen
    maxWidth: width, // Set the max width to screen width
    flexDirection: "row", // Ensure the icon and text are on the same row
    alignItems: "center", // Vertically align items in the center
    justifyContent: "space-between", // Space out the back icon and title
    padding: 10, // Add padding to make it look spacious
  },
});

export default NavigationHeader;
