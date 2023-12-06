import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Booking, Home, More, Schedule, Services } from '../pages';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { MyTabBar } from './CustomTabs';
import { Keyboard } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {


    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props: any) => <MyTabBar  {...props} />}>
            <Tab.Screen name={'Dashboard'} component={Home} />
            <Tab.Screen name={'Booking'} component={Booking} />
            <Tab.Screen name={'Services'} component={Services} />
            <Tab.Screen name={'Schedule'} component={Schedule} />
            <Tab.Screen name={'More'} component={More} />
        </Tab.Navigator>
    );
}

export { MyTabs };