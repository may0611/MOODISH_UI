import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

function SigninSuccess({ navigation }) {  // navigation prop 추가
  const [fontsLoaded] = useFonts({
    JustMeAgainDownHere: require('./assets/fonts/JustMeAgainDownHere.ttf'), 
  });

  // Show loading screen until fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // 화면 전환 함수
  const handleStart = () => {
    navigation.navigate('SurveyScreenHappy'); // 이동하려는 화면으로 변경
  };

  return (
    <View style={styles.container}>
      {/* Party Image with Overlay Text */}
      <View style={styles.overlayContainer}>
        <Image
          source={require('./assets/party.png')} 
          style={styles.partyImage}
        />
        <Text style={styles.overlayText}>
          <Text style={styles.title}>Moodish</Text>
          <Text style={styles.subtitle}> 에 오신 것을 환영합니다</Text>
        </Text>
      </View>
      {/* Bee Image */}
      <Image
        source={require('./assets/bee.png')} 
        style={styles.image}
      />
      {/* Start Button */}
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  overlayContainer: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  partyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlayText: {
    position: 'absolute',
    color: '#000', 
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontSize: 75,
    fontFamily: 'JustMeAgainDownHere', 
    color: '#000',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '350', 
    color: '#000',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SigninSuccess;
