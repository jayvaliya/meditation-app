import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { ScrollView } from 'react-native-gesture-handler'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmations = () => {
    return (
        <View className='flex-1 '>
            <AppGradient colors={['#000000', '#440000']}>
                <ScrollView showsVerticalScrollIndicator={false} className='p-4 mb-14'>
                    <Text className=' text-zinc-50 text-3xl font-bold'>Change Your Belifes with Affirmations</Text>
                    <View className=' mb-5'>
                        {AFFIRMATION_GALLERY.map((item) => (
                            <GuidedAffirmationsGallery
                                title={item.title}
                                previews={item.data}
                                key={item.title}
                            />
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View >
    )
}

export default Affirmations;