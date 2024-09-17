import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import CustomButton from './CustomButton';
// @ts-ignore
import beachImage from '@/assets/meditation-images/beach.webp';


const Home = () => {
    return (
        <View>
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1 h-"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
                    className="flex-1"
                >
                    <SafeAreaView edges={['top']} className="flex-1 mx-5 mb-8 justify-between">
                        <View className='flex-1' >
                            <Text className=' text-white text-3xl font-bold text-center'>Simple Maditation</Text>
                            <Text className='text-white text-center text-xl mt-2'>Simplifying Maditation for Everyone</Text>
                        </View>
                        <Link href={'/about'}>
                            <CustomButton title='Get Started' onPress={() => { }} containerStyle={''} />
                        </Link>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default Home;