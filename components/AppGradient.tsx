import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

const AppGradient = ({ children, colors }: { children: any; colors: String[] }) => {
    return (
        <LinearGradient colors={colors} className='flex-1' >
            <Content>{children}</Content>
            {/* {children} */}
        </LinearGradient>
    )
}

export default AppGradient;