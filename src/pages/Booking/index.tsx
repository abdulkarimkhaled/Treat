import React from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { StatusBar, TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { FirstRoute } from './FirstRoute';
import { SecondRoute } from './SecondRoute';
import { ThirdRoute } from './ThirdRoute';
import { fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';
import NavigationService from '../../navigation/NavigationService';

function Booking() {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'PAST' },
        { key: 'second', title: 'UP-COMING' },
        { key: 'third', title: 'SCHEDULE' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                {...props}
                activeColor='#4A5A51'
                inactiveColor='#AFAFAF'
                indicatorStyle={{
                    backgroundColor: '#4A5A51',
                    width: calcWidth(65)
                }}
                indicatorContainerStyle={{
                    left: calcWidth(30),
                    borderColor: 'transparent',
                    borderBottomColor: '#ECEDED',

                }}
                style={{
                    backgroundColor: '#F6F6F6',
                    width: calcWidth(373),
                    alignSelf: 'center',
                    marginBottom: calcHeight(20),
                    shadowColor: 'transparent',
                }}
                labelStyle={{
                    fontFamily: fonts.SemiBoldSans,
                    fontSize: calcWidth(14),
                    fontWeight: '600',
                }}
            />
        )
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Header bellBool line />
            <TouchableOpacity onPress={() => NavigationService.navigate('AddBooking')} style={styles.newBookingButton} >
                <Text style={styles.newBookingText} >
                    NEW BOOKING
                </Text>
            </TouchableOpacity>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}

            />
        </View>
    );
}

export { Booking };
