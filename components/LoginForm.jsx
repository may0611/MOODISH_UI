import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


const LoginForm = ({ navigation }) => { 
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        accessibilityLabel="Username input field"
        accessibilityHint="Enter your username"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        accessibilityLabel="Password input field"
        accessibilityHint="Enter your password"
      />
      <TouchableOpacity 
        style={styles.loginButton}
        accessibilityRole="button"
        accessibilityLabel="Login button"
        onPress={() => navigation.navigate('Profile')} // 'Profile'로 이동
      >
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.signupButton}
        accessibilityRole="button"
        accessibilityLabel="Sign up button"
        onPress={() => navigation.navigate('Signup')} 
      >
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(224, 224, 224, 1)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    color: 'rgba(130, 130, 130, 1)',
  },
  loginButton: {
    backgroundColor: '#6C95F0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  signupButton: {
    backgroundColor: '#FD7D7D',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
});

export default LoginForm;
