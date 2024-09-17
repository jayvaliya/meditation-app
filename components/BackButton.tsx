import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const BackButton = () => {
    return (
        <Pressable
            onPress={() => router.back()}
            className='absolute top-12 left-3 z-10'
        >
            <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
    )
}

export default BackButton;