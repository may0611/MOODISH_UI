import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const RefrigeratorReceipt = ({ navigation }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // 이미지 선택 함수
    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('Image picker cancelled');
            } else if (response.errorCode) {
                console.error('Image picker error:', response.errorMessage);
            } else {
                const uri = response.assets[0].uri;
                setSelectedImage(uri); // 선택된 이미지 저장
            }
        });
    };

    // 이미지 업로드 함수
    const uploadImage = async () => {
        if (!selectedImage) {
            Alert.alert('Error', '이미지를 선택하세요.');
            return;
        }

        const formData = new FormData();
        formData.append('image', {
            uri: selectedImage,
            type: 'image/jpeg',
            name: 'receipt.jpg',
        });

        try {
            const response = await fetch('http://127.0.0.1:5000/foodImg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });

            const result = await response.json();
            Alert.alert('Success', `이미지 처리 완료: ${result.img_link}`);
        } catch (error) {
            console.error('Upload failed:', error);
            Alert.alert('Error', '이미지 업로드 실패');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>촬영한 영수증을 업로드하세요.</Text>
            <View style={styles.imageContainer}>
                {/* 여기에 이미지 업로드가 들어갈 공간입니다. */}
                <Image source={{ uri: 'your-image-url-here' }} style={styles.image} />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('NextScreen')} // 'NextScreen'으로 이동
            >
                <Text style={styles.buttonText}>저장</Text>
            </TouchableOpacity>

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
        padding: 20,
        backgroundColor: '#fff',
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 40,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#FF6B6B',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 200,
        marginLeft: 50,
        marginRight: 50,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
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

export default RefrigeratorReceipt;
