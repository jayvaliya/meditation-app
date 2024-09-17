import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router, useLocalSearchParams } from 'expo-router'
import BackButton from '@/components/BackButton'
import CustomButton from '@/components/CustomButton'
import { Audio } from 'expo-av'
import { AUDIO_FILES, MEDITATION_DATA } from '@/constants/MeditationData'

const Meditate = () => {
    const { id } = useLocalSearchParams();

    const [secondsRemaining, setSecondsRemaining] = React.useState(600);
    const [isMeditating, setMeditating] = React.useState(false);
    const [audioSound, setAudioSound] = React.useState<Audio.Sound>();
    const [isPlayingAudio, setPlayingAudio] = React.useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (secondsRemaining === 0) {
            setMeditating(false);
            return;
        }

        if (isMeditating) {
            timerId = setTimeout(() => {
                setSecondsRemaining(prev => prev - 1);
            }, 1000);
        }

        // runs when component unmounts
        return () => {
            clearTimeout(timerId);
        }
    }, [secondsRemaining, isMeditating]);

    const toggleMeditationSessionStatus = async () => {
        if (secondsRemaining === 0) {
            setSecondsRemaining(600);
            setMeditating(false);
        }

        await toggleSound();
    }

    const toggleSound = async () => {
        const sound = audioSound ? audioSound : await initilizeAudio();

        const status = await sound?.getStatusAsync();

        if (status?.isLoaded && !isPlayingAudio) {
            await sound?.playAsync();
            setPlayingAudio(true);
            setMeditating(true);  // Start meditating when audio starts
        } else {
            sound?.pauseAsync();
            setPlayingAudio(false);
            setMeditating(false);  // Stop meditating when audio pauses
        }
    }

    const initilizeAudio = async () => {
        const audiofileName = MEDITATION_DATA[Number(id) - 1].audio;

        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audiofileName]
        );
        setAudioSound(sound);
        return sound;
    }

    useEffect(() => {
        return () => {
            audioSound?.unloadAsync();
        }
    }, [audioSound]);

    const formatedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
    const formatedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0');

    return (
        <View className='flex-1 '>
            <ImageBackground source={MEDITATION_IMAGES[Number(id) - 1]} className='flex-1' resizeMode='cover'>
                <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']} >
                    <BackButton />
                    <View className='flext-1 justify-center h-full'>
                        <View className='justify-center mx-auto items-center bg-neutral-300 rounded-full h-44 w-44'>
                            <Text className=' text-5xl text-zinc-700 font-semibold font-rmono'>
                                {formatedTimeMinutes}:{formatedTimeSeconds}
                            </Text>
                        </View>
                    </View>

                    <View className='m-5 absolute bottom-0  overflow-hidden w-[90%] '>
                        {/* will be added soon */}
                        {/* <CustomButton title='Adjust Duration' containerStyle={'rounded-full'} onPress={toggleMeditationSessionStatus} /> */}
                        <CustomButton title='Start Meditation' containerStyle={'rounded-full mt-3'} onPress={toggleMeditationSessionStatus} />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View >
    )
}

export default Meditate;