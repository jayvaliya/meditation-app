import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const TabsLayouts = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#111111',
                    paddingBottom: 10,
                    paddingVertical: 10,
                    borderColor: 'transparent',
                    height: 60,
                    position: 'absolute',
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen
                name='nature-meditate'
                options={{
                    tabBarLabel: 'Meditate',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='affirmations'
                options={{
                    tabBarLabel: 'Affirmations',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="open-book" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayouts;
