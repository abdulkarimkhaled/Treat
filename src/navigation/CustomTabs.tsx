import { View, Text, TouchableOpacity, Keyboard, } from 'react-native';
import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import styles from './styles';
import { colors } from '../config/appStyles';
import DashboardTab from '../icons/svgs/DashboardTab';
import CalendarTab from '../icons/svgs/CalendarTab';
import PlusTab from '../icons/svgs/PlusTab';
import MenuTab from '../icons/svgs/MenuTab';
import { calcHeight, calcWidth } from '../config/metrics';
import TabBarNotch from '../icons/svgs/TabBarNotch';
import Heart from '../icons/svgs/Heart';
import Home from '../icons/svgs/Home';

type ItemProps = {
    state: object,
    descriptors: Array<object>,
    navigation: string,
    type: string
}
const MyTabBar: FunctionComponent<ItemProps> = ({
    state, descriptors, navigation, type
}) => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useLayoutEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    if (!keyboardStatus) {
        return (
            <View style={styles.container}>
                {state.routes.map((route: object, index: number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const getColor = (flag: boolean) => {
                        return flag ? colors.white : '#a4ada8'
                    }

                    return (
                        <TouchableOpacity
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={styles.tabContainer}>

                            {type == 'Customer' ? <View style={{
                                width: calcWidth(20),
                                height: calcWidth(25),
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: calcHeight(5)
                            }} >
                                {isFocused ? <TabBarNotch style={{
                                    position: 'absolute',
                                    top: calcHeight(-20)
                                }} /> : null}
                                {index == 0 && <Home color={getColor(isFocused)} />}
                                {index == 1 && <CalendarTab color={getColor(isFocused)} />}
                                {index == 2 && <Heart color={getColor(isFocused)} />}
                                {index == 3 && <MenuTab color={getColor(isFocused)} />}
                            </View> :

                                <View style={{
                                    width: calcWidth(20),
                                    height: calcWidth(25),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: calcHeight(5)
                                }} >
                                    {isFocused ? <TabBarNotch style={{
                                        position: 'absolute',
                                        top: calcHeight(-20)
                                    }} /> : null}
                                    {index == 0 && <DashboardTab color={getColor(isFocused)} />}
                                    {index == 1 && <CalendarTab color={getColor(isFocused)} />}
                                    {index == 2 && <PlusTab color={getColor(isFocused)} />}
                                    {index == 3 && <CalendarTab color={getColor(isFocused)} />}
                                    {index == 4 && <MenuTab color={getColor(isFocused)} />}
                                </View>}
                            <Text style={[styles.label, isFocused && { color: 'white' }]} >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    } else {
        <View />
    }

}

export { MyTabBar }