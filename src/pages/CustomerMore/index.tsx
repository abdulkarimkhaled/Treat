import React from 'react';
import { Text, View } from "react-native";
import { Header } from '../../components/models/Header';
import { MoreItem } from '../../components/organisms/MoreItem';
import NavigationService from '../../navigation/NavigationService';
import { calcHeight } from '../../config/metrics';
import User from '../../icons/svgs/User';
import styles from './styles';
import Lang from '../../icons/svgs/Lang';
import LogOut from '../../icons/svgs/LogOut';
import Points from '../../icons/svgs/Points';
import Wallet from '../../icons/svgs/Wallet';
import TermsCond from '../../icons/svgs/TermsCond';
import Faq from '../../icons/svgs/Faq';
import ContactUs from '../../icons/svgs/ContactUs';
import { Share } from '../../icons/svgs';
import Pin from '../../icons/svgs/Pin';

function CustomerMore(props: any) {

    return (
        <View style={styles.container}>
            <Header pinBool filterBool bellBool line />
            <View style={{
                marginTop: calcHeight(14)
            }} />
            <MoreItem
                onPress={() => NavigationService.navigate('CustomerProfile')}
                title='My Profile' icon={<User />} />
            <MoreItem
                onPress={() => NavigationService.navigate('MyPoints')}
                title='My Points' icon={<Points />} />
            <MoreItem
                onPress={() => NavigationService.navigate('MyWallet')}
                title='My Wallet' icon={<Wallet />} />
            <MoreItem
                onPress={() => NavigationService.navigate('MapScreen')}
                title='Change Location' icon={<Pin />} />
            <MoreItem
                onPress={() => NavigationService.navigate('Language')}
                title='Language' icon={<Lang />} />
            <MoreItem
                onPress={() => NavigationService.navigate('Faq')}
                title='FAQ' icon={<Faq />} />
            <MoreItem
                onPress={() => NavigationService.navigate('TermsConditions')}
                title='Terms & Conditions' icon={<TermsCond />} />
            <MoreItem
                onPress={() => NavigationService.navigate('ContactUs')}
                title='Contact Us' icon={<ContactUs />} />
            {/* <MoreItem
                onPress={() => NavigationService.reset('Login')}
                title='Logout' icon={<LogOut />} /> */}
            <MoreItem
                title='Share' icon={<Share />} />
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

export { CustomerMore };
