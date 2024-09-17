import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Content = ({ children }: any) => {
    return (
        <SafeAreaView edges={['top']}>{children}</SafeAreaView>
    )
}

export default Content;