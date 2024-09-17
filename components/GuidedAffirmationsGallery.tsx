import { View, Text, Pressable, Image, } from 'react-native'
import React from 'react'
import { GallaryPrivewData } from '@/constants/models/AffirmationCategory';
import { FlatList } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: GallaryPrivewData[];
}

const GuidedAffirmationsGallery = ({ title, previews }: GuidedAffirmationsGalleryProps) => {
    return (
        <View className='my-5'>
            <View className='mb-2'>
                <Text className=' font-bold text-white text-xl'>{title}</Text>
            </View>
            <View className=' space-y-2'>
                <FlatList
                    data={previews}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Link
                            href={`/affirmations/${item.id}`}
                            asChild
                        >
                            <Pressable>
                                <View className='h-36 w-32 rounded-md border-2 border-zinc-300 mr-4'>
                                    <Image source={item.image}
                                        resizeMode='cover'
                                        className='h-full w-full rounded-md'
                                    />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                />
            </View>
        </View>
    )
}

export default GuidedAffirmationsGallery;