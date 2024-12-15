import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FormField from "./components/FormField";
import NavigationHeader from "./components/NavigationHeader";
import SubmitButton from "./components/SubmitButton";

const formFields = [
  { id: "name", label: "이름", marginTop: 10 },
  { id: "username", label: "아이디", marginTop: 30 },
  { id: "password", label: "비밀번호", marginTop: 30 },
  { id: "confirmPassword", label: "비밀번호 확인", marginTop: 30 }
];

function SignupForm() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavigationHeader />
      {formFields.map((field) => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          marginTop={field.marginTop}
        />
      ))}
      <SubmitButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 10,
    paddingBottom: 88,
    flexDirection: "column",
    backgroundColor: "#fff",
    overflow: "hidden",
    fontFamily: "Just Me Again Down Here, sans-serif",
    fontSize: 16,
    color: "rgba(135, 125, 125, 1)",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: -0.16,
  }
});

export default SignupForm;
