import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomerBooking, CustomerHome, CustomerMore, Favourites } from '../pages';
import React from 'react';
import { MyTabBar } from './CustomTabs';

const Tab = createBottomTabNavigator();

function CustomerTabs(props: any) {
    let init = 'Home'
    if (props?.route?.params?.index) {
        let index = props?.route?.params?.index
        if (index == 0) {
            init = 'Home'
        }
        if (index == 1) {
            init = 'Booking'
        }
        if (index == 2) {
            init = 'Favourites'
        }
        if (index == 3) {
            init = 'More'
        }
    }
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={init}
            tabBar={(props: any) => <MyTabBar type='Customer'  {...props} />}>
            <Tab.Screen name={'Home'} component={CustomerHome} />
            <Tab.Screen name={'Booking'} component={CustomerBooking} />
            <Tab.Screen name={'Favourites'} component={Favourites} />
            <Tab.Screen name={'More'} component={CustomerMore} />
        </Tab.Navigator>
    );
}

export { CustomerTabs };