import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import { Whatsapp } from '../../icons/svgs';
import Email from '../../icons/svgs/Email';

function ContactUs(props: any) {


    return (
        <View style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Contact Us
                </Text>
            </View>
            <TouchableOpacity
                style={styles.addServiceButton} >
                <LinearGradient
                    useAngle={true}
                    angle={-266}
                    style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                    <Whatsapp />
                    <Text style={styles.addServiceText} >
                        WHATSAPP CHAT
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.emailButton} >
                <Email />
                <Text style={styles.emailText} >
                    EMAIL US
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export { ContactUs };
