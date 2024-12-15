import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // expo-image-picker import
import { useNavigation } from '@react-navigation/native';

const MoodRecognitionScreen = () => {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null); // 선택한 이미지 상태
    const [mood, setMood] = useState('기쁨'); // 예시로 '기쁨' 설정

    // 갤러리에서 이미지 선택하기
    const pickImage = async () => {
        // 권한 요청
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('카메라 권한을 요청할 수 없습니다.');
            return;
        }

        // 이미지 선택
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // 이미지만 선택
            allowsEditing: true, // 편집 가능
            aspect: [4, 3], // 비율 설정
            quality: 1, // 고화질로 선택
        });

        if (!result.canceled) {
            setSelectedImage(result.uri); // 선택한 이미지 URI 설정
        }
    };

    const handleNext = () => {
        navigation.navigate('NextScreen'); // 'NextScreen'으로 이동
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>자신의 감정이 담긴 얼굴 이미지를 업로드해주세요.</Text>
            {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.capturedImage} />
            ) : (
                <Text style={styles.placeholderText}>이미지를 선택해주세요</Text>
            )}
            <Text style={styles.moodText}>홍길동님의 감정은 {mood}입니다</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>사진 선택</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedImage && styles.buttonActive]} 
                    onPress={handleNext}
                    disabled={!selectedImage} // 사진이 없으면 버튼 비활성화
                >
                    <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>
            </View>

            {/* 하단 네비게이션 바 */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image source={require('./assets/reading glasses.png')} style={styles.navIcon1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('./assets/home.png')} style={styles.navIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RefrigeratorReceipt')}>
                    <Image source={require('./assets/refrigerator.png')} style={styles.navIcon1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
                    <Image source={require('./assets/userIcon.png')} style={styles.navIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        alignContent: 'center',
    },
    capturedImage: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover',
        marginBottom: 10,
    },
    placeholderText: {
        fontSize: 18,
        color: '#888',
        marginVertical: 20,
    },
    moodText: {
        fontSize: 18,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        backgroundColor: '#ddd',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    buttonActive: {
        backgroundColor: '#FD7D7D', // 활성화된 상태에서 버튼 색상
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
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
        marginTop: 5,
    },
});

export default MoodRecognitionScreen;
