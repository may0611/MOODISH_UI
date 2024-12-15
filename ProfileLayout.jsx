import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileLayout = () => {
  const navigation = useNavigation();

  // 버튼 클릭 핸들러
  const handleEmotionRecognition = () => {
    navigation.navigate('MoodRecognitionScreen'); // 'MoodRecognition' 화면으로 이동
  };

  const handleEmotionSelection = () => {
    navigation.navigate('MoodSelectionScreen'); // 'MoodSelection' 화면으로 이동
  };

  return (
    <View style={styles.container}>
      {/* 사용자 프로필 */}
      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/user.png')} // 프로필 이미지 경로
          style={styles.userImage}
        />
        <Text style={styles.username}>홍길동</Text>
      </View>

      {/* 질문 텍스트 */}
      <Text style={styles.questionText}>요리 뭐할까?</Text>
      <Text style={styles.emotionText}>지금 내 감정은?</Text>

      {/* 버튼 섹션 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBlue} onPress={handleEmotionRecognition}>
          <Text style={styles.buttonText}>감정 인식하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRed} onPress={handleEmotionSelection}>
          <Text style={styles.buttonText}>감정 선택하기</Text>
        </TouchableOpacity>
      </View>

      {/* 자주 쓰는 레시피 섹션 */}
      <Text style={styles.recipeTitle}>자주 쓰는 레시피</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipeContainer}>
        <Image
          source={require('./assets/pasta.png')} // 자주 쓰는 레시피 이미지 경로
          style={styles.recipeImage}
        />
        <Image
          source={require('./assets/sandwich.png')} // 자주 쓰는 레시피 이미지 경로
          style={styles.recipeImage}
        />
        <Image
          source={require('./assets/gimbap.png')} // 자주 쓰는 레시피 이미지 경로
          style={styles.recipeImage}
        />
      </ScrollView>

      {/* 하단 네비게이션 바 */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('./assets/reading glasses.png')} // 검색 아이콘
            style={styles.navIcon1}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('./assets/home.png')} // 홈 아이콘
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RefrigeratorReceipt')}>
          <Image
            source={require('./assets/refrigerator.png')} // 리스트 아이콘
            style={styles.navIcon1}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
          <Image
            source={require('./assets/userIcon.png')} // 프로필 아이콘
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 30,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  questionText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 10,
  },
  emotionText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  buttonBlue: {
    backgroundColor: '#6C95F0',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    marginRight: 10,
    width: '48%'
  },
  buttonRed: {
    backgroundColor: '#FF6B6B',
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    width: '48%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 25
  },
  recipeContainer: {
    flexDirection: 'row',
  },
  recipeImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 15
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  navIcon1: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 5
  },
});

export default ProfileLayout;
