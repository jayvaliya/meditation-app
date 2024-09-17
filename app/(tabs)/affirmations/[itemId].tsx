import { View, Text, ImageBackground, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { GallaryPrivewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppGradient from '@/components/AppGradient';
import { ScrollView } from 'react-native-gesture-handler';
import BackButton from '@/components/BackButton';

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GallaryPrivewData>();
    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationsData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationsData.find(
                (a) => a.id === Number(itemId)
            );

            if (affirmationToStart) {
                const affirmationArray = affirmationToStart.text.split('.');

                // Remove any empty sentence caused by ending with a period
                if (affirmationArray[affirmationArray.length - 1] === '') {
                    affirmationArray.pop();
                }

                setSentences(affirmationArray);
                setAffirmation(affirmationToStart);
                break;
            }
        }
    }, [itemId]);

    return (
        <View className='flex-1'>
            <ImageBackground
                source={affirmation?.image}
                resizeMode='cover'
                className='flex-1'
            >
                <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']} >
                    <BackButton />
                    <ScrollView
                        className='mt-20'
                        showsVerticalScrollIndicator={false}
                    >
                        <View className='flex-1 justify-center items-center text-center py-10'>
                            {sentences.map((sentence, index) => (
                                <Text
                                    key={index}
                                    className='text-white text-center font-bold text-3xl mb-12 px-3'
                                >
                                    {sentence.trim()}
                                </Text>
                            ))}
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default AffirmationPractice;
