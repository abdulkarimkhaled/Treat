import React from 'react';
import { Text, View } from "react-native";
import { Header } from '../../components/models/Header';
import { MoreItem } from '../../components/organisms/MoreItem';
import User from '../../icons/svgs/User';
import { calcHeight } from '../../config/metrics';
import styles from './styles';
import Lang from '../../icons/svgs/Lang';
import DisableAccount from '../../icons/svgs/DisableAccount';
import LogOut from '../../icons/svgs/LogOut';
import NavigationService from '../../navigation/NavigationService';
import { useDispatch } from 'react-redux';
import Types from '../../redux/types';

function More(props: any) {
    const dispatch = useDispatch()

    const logOut = () => {
        NavigationService.reset("Login")
        dispatch({
            type: Types.DELETE_LOGIN
        })
    }

    return (
        <View style={styles.container}>
            <Header line />
            <View style={{
                marginTop: calcHeight(14)
            }} />
            <MoreItem
                onPress={() => NavigationService.navigate('MyProfile')}
                title='My Profile' icon={<User />} />
            <MoreItem
                onPress={() => NavigationService.navigate('Language')}
                title='Language' icon={<Lang />} />
            <MoreItem
                title='Disable Account' icon={<DisableAccount />} />
            <MoreItem onPress={() => logOut()} title='Logout' icon={<LogOut />} />
            <View style={{
                position: 'absolute',
                bottom: calcHeight(100),
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.version} >
                    Version 1.0.0
                </Text>
                <Text style={styles.copyRight}>
                    Copyright ©Treat 2023
                </Text>
            </View>
        </View>
    );
}

export { More };
