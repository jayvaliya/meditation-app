import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    textStyle?: String;
    containerStyle?: String;
}

const CustomButton = ({ title, onPress, textStyle, containerStyle }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            className={`bg-white py-2 px-4 rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}
            onPress={() => { onPress() }}
        >
            <Text className={` font-bold text-base  ${textStyle}`}>{title}</Text>
        </TouchableOpacity >
    )
}

export default CustomButton;