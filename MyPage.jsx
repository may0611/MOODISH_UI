import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const MyPage = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/user.png')} // 프로필 이미지 경로
          style={styles.profileImage}
        />
        <Text style={styles.userName}>홍길동</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>계정</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>내 기본 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>탈퇴하기</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>정보</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>주간/월별 감정 기록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>감정 일기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>사용자 피드백</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>앱 버전</Text>
          <Text style={styles.versionText}>v 3.38.0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>약관 및 정책</Text>
        </TouchableOpacity>
      </View>

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    height: 10,
    backgroundColor: 'DADADA',
  },
  section: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingBottom: 10,
  },
  itemText: {
    fontSize: 14,
  },
  versionText: {
    fontSize: 12,
    color: '#888',
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: -60,
    left: 0,
    right: 0,
    paddingVertical: 10
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

export default MyPage;
