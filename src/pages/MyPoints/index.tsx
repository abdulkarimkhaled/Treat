import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { calcWidth } from '../../config/metrics';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Points from '../../icons/svgs/Points';
import { colors } from '../../config/appStyles';

function MyPoints(props: any) {

    const [points, setPoints] = useState([
        { date: '22 July 2023 , 09.00am', amount: 50, orderNumber: '#45545', points: 100 },
        { date: '22 July 2023 , 09.00am', amount: 50, orderNumber: '#45545', points: 100 },
        { date: '22 July 2023 , 09.00am', amount: 50, orderNumber: '#45545', points: 100 },
        { date: '22 July 2023 , 09.00am', amount: 50, orderNumber: '#45545', points: 100 },
        { date: '22 July 2023 , 09.00am', amount: 50, orderNumber: '#45545', points: 100 },
    ])

    const renderPoints = ({ item, index }: any) => {
        return (
            <View style={styles.pointsHistoryItem} >
                <View style={styles.row} >
                    <Text style={styles.date} >{item.date}</Text>
                    <Text style={styles.orderNumber} >{item.orderNumber}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.amount}>Payment SR {item.amount}</Text>
                    <Text style={styles.pointsAdded}>+{item.points}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header line />
            <View style={styles.header} >
                <TouchableOpacity onPress={() => NavigationService.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    My Points
                </Text>
            </View>

            <LinearGradient
                useAngle={true}
                angle={-266}
                style={styles.pointsView} colors={['#5D7568', '#495B51']} >
                <Text style={styles.yourPoints} >
                    Your Points
                </Text>
                <Text style={styles.points} >
                    500 Points
                </Text>
                <Text style={styles.updated} >
                    Latest update 22 July 2023
                </Text>
                <View style={styles.pointsIcon} >
                    <Points color={colors.white} />
                </View>
            </LinearGradient>

            <View style={styles.historyTitle} >
                <Text style={styles.historyText} >
                    Points History
                </Text>
                <Text style={styles.resultsText}>
                    "{points.length} Results"
                </Text>
            </View>
            <FlatList
                data={points}
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                renderItem={renderPoints}
                showsVerticalScrollIndicator={false}
            />


            <TouchableOpacity
                onPress={() => NavigationService.goBack()}
                style={styles.addServiceButton} >
                <LinearGradient
                    useAngle={true}
                    angle={-266}
                    style={styles.gradientButton} colors={['#607569', '#4A5A51']} >
                    <Text style={styles.addServiceText} >
                        + ADD TO WALLET
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
}

export { MyPoints };
