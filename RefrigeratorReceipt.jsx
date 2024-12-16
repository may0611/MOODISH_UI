import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const ImagePickerComponent = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [apiResult, setApiResult] = useState(null); // API 결과 저장
    const [ingred,seting] = useState(null);
ingred
    const pickImage = async () => {
        console.log('pickImage 함수 호출됨');

        // 권한 요청 및 확인
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('권한 필요', '이미지 선택을 위해 갤러리 접근 권한이 필요합니다.');
            return;
        }
        console.log('갤러리 접근 권한 승인됨');

        // 이미지 선택
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log('ImagePicker 결과:', result);

            if (!result.canceled && result.assets && result.assets.length > 0) {
                const selectedUri = result.assets[0].uri;
                console.log('선택된 이미지 URI:', selectedUri);
                setSelectedImage(selectedUri);
                uploadImage(selectedUri); // 이미지 업로드 함수 호출
            } else {
                console.log('이미지 선택 취소됨');
            }
        } catch (error) {
            console.error('이미지 선택 중 오류 발생:', error);
        }
    };

    const uploadImage = async (imageUri) => {
        console.log('Uploading image to server:', imageUri);
        const formData = new FormData();
        formData.append('image', {
            uri: imageUri,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });

        console.log('FormData 내용:', formData._parts);

        try {
            const response = await axios.post('http://172.25.84.220:5000/receipt', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log('API Response:', response.data);

            if (response.data) {
                setApiResult(response.data); // API 결과 저장
            } else {
                Alert.alert('오류', '서버에서 유효한 응답을 받지 못했습니다.');
            }
        } catch (error) {
    if (error.response) {
        // 서버에서 응답을 받았지만 상태 코드가 2xx가 아닌 경우
        console.error('서버 응답 오류:', error.response.data);
        console.error('상태 코드:', error.response.status);
        console.error('헤더:', error.response.headers);
        Alert.alert('오류', `서버에서 오류가 발생했습니다: ${error.response.data?.error || '알 수 없는 오류'}`);
    } else if (error.request) {
        // 요청이 전송되었지만 응답이 없는 경우
        console.error('요청 전송됨, 응답 없음:', error.request);
        Alert.alert('오류', '서버 응답이 없습니다. 네트워크 상태를 확인하세요.');
    } else {
        // 요청 설정 중에 발생한 오류
        console.error('요청 설정 중 오류:', error.message);
        Alert.alert('오류', `요청을 초기화하는 동안 문제가 발생했습니다: ${error.message}`);
    }
    console.error('전체 오류 객체:', error.toJSON());
}
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Image Picker Example</Text>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>갤러리에서 이미지 선택</Text>
            </TouchableOpacity>

            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}

            {apiResult && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>재료:</Text>
                    
                    <Text style={styles.resultText}>{JSON.stringify(apiResult.rec_res)}</Text>
                </View>
            )}
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
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        marginTop: 20,
    },
    resultContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 14,
    },
});

export default ImagePickerComponent;
