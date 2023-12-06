import React from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { StatusBar, TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { FirstRoute } from './FirstRoute';
import { SecondRoute } from './SecondRoute';
import { fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';
import NavigationService from '../../navigation/NavigationService';
import { Route, Scene } from 'react-native-tab-view/lib/typescript/src/types';
import { Props } from 'react-native-tab-view/lib/typescript/src/TabView';

function CustomerBooking() {

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'PAST' },
        { key: 'second', title: 'UP-COMING' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                {...props}
                activeColor='#4A5A51'
                inactiveColor='#AFAFAF'
                indicatorStyle={{
                    backgroundColor: 'transparent',
                }}
                renderLabel={(scene: Scene<Route> & {
                    focused: boolean;
                    color: string;
                }) => {
                    return (
                        <View style={{}} >
                            <Text style={{
                                fontFamily: fonts.SemiBoldSans,
                                fontSize: calcWidth(14),
                                fontWeight: '600',
                                color: scene.color
                            }} >{scene.route.title}</Text>
                            <View style={{
                                backgroundColor: !scene.focused ? 'transparent' : '#4A5A51',
                                width: '100%',
                                height: calcHeight(2),
                                marginTop: calcHeight(10)
                            }} ></View>
                        </View>
                    )
                }}
                style={{
                    backgroundColor: '#F6F6F6',
                    width: calcWidth(373),
                    alignSelf: 'center',
                    marginBottom: calcHeight(20),
                    shadowColor: 'transparent',
                }}
            />
        )
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Header bellBool line pinBool filterBool />
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

export { CustomerBooking };
