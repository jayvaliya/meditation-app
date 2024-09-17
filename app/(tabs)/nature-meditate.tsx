import { View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { FlatList } from 'react-native-gesture-handler'

import { MEDITATION_DATA } from '@/constants/MeditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'


const NatureMeditate = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={['#000000', '#0a4b4a', '#766e67']} >
                <View className='mb-2'>

                    <View className=' p-4'>
                        <Text className='text-gray-200 mb-3 font-bold text-4xl'>Welcome</Text>
                        <Text className='text-gray-200 mb-3 font-medium text-xl'>Start your Meditation Practice Today</Text>
                    </View>
                    <FlatList data={MEDITATION_DATA}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={true}
                        className='mb-72'
                        renderItem={({ item }) => (

                            <Pressable onPress={() => { router.push(`/meditate/${item.id}`) }}
                                className='h-48 mb-6 rounded-md overflow-hidden mx-5'
                            >
                                <ImageBackground
                                    source={MEDITATION_IMAGES[item.id - 1]}
                                    className='flex-1 rounded-lg justify-center'
                                    resizeMode='cover'
                                >
                                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} className='flex-1 items-center justify-center'>
                                        <Text className='text-gray-200 text-center text-3xl font-bold'>{item.title} </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                </View>
            </AppGradient>
            <StatusBar style="light" backgroundColor="black" animated={true} />
        </View>
    )
}

export default NatureMeditate;