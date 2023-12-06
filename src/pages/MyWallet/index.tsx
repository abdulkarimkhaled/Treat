import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import Points from '../../icons/svgs/Points';
import { colors } from '../../config/appStyles';

function MyWallet(props: any) {


    return (
        <View style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    My Wallet
                </Text>
            </View>

            <LinearGradient
                useAngle={true}
                angle={180}
                style={styles.pointsView} colors={['#B2866B', '#95552D']} >
                <Text style={styles.yourPoints} >
                    Your balance
                </Text>
                <Text style={styles.points} >
                    SR 500.00
                </Text>

                <View style={styles.pointsIcon} >
                    <Points color={colors.white} />
                </View>
            </LinearGradient>



        </View>
    );
}

export { MyWallet };
