import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // 이미지 선택 라이브러리
import axios from 'axios'; // Flask API 호출을 위한 HTTP 클라이언트

const MoodRecognitionScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [emotionResult, setEmotionResult] = useState([]);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.assets && result.assets.length > 0) {
            const selectedUri = result.assets[0].uri;
            setSelectedImage(selectedUri);
            analyzeEmotion(selectedUri);
        } else {
            console.log('No image selected or canceled.');
        }
    };

    const analyzeEmotion = async (imageUri) => {
        const formData = new FormData();
        formData.append('image', {
            uri: imageUri,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });
    
        try {
            const response = await axios.post('http://192.168.0.13:5000/analyze_emotion', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log('API Response Data:', response.data);
    
            // 응답 데이터를 바로 저장
            if (response.data && typeof response.data === 'object') {
                setEmotionResult(response.data); // 객체 저장
            } else {
                setEmotionResult(null);
                console.error('Unexpected API response:', response.data);
            }
        } catch (error) {
            console.error('감정 분석 오류:', error);
            setEmotionResult(null); // 오류 시 상태 초기화
        }
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mood Recognition</Text>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>갤러리에서 이미지 선택</Text>
            </TouchableOpacity>
    
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
    
            {emotionResult && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>감정 분석 결과:</Text>
                    <Text style={styles.resultText}>
                        감정: {emotionResult.emotion}
                    </Text>
                </View>
            )}
        </View>
    );
};

// styles 객체는 컴포넌트 외부에서 정의
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
        marginBottom: 20,
    },
    resultContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default MoodRecognitionScreen;
