import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupForm from './SignupForm'; // Import your SignupForm
import SigninSuccess from './SigninSuccess'; // Import your SigninSuccess
import ProfileLayout from './ProfileLayout';
import MyPage from './MyPage';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupForm">
        <Stack.Screen name="SignupForm" component={SignupForm} />
        <Stack.Screen name="SigninSuccess" component={SigninSuccess} />
        <Stack.Screen name="Profile" component={ProfileLayout} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
