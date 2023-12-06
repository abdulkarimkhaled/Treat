import React, { useEffect } from 'react';
import { TabBar, TabView } from 'react-native-tab-view';
import { StatusBar, View, useWindowDimensions } from 'react-native';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { FirstRoute } from './FirstRoute';
import { SecondRoute } from './SecondRoute';
import { ThirdRoute } from './ThirdRoute';
import { fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';
import { useGetDashboardQuery } from '../../apis/generalAPIs';
import { useSelector } from 'react-redux';
function Home() {
    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)
    const { data, isLoading, isFetching, refetch } = useGetDashboardQuery(authToken)

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Monthly' },
        { key: 'second', title: 'Weekly' },
        { key: 'third', title: 'Daily' },
    ]);

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                {...props}
                activeColor='#4A5A51'
                inactiveColor='#AFAFAF'
                indicatorStyle={{
                    backgroundColor: '#4A5A51',
                    width: calcWidth(69)
                }}
                indicatorContainerStyle={{
                    width: calcWidth(373),
                    left: calcWidth(27),
                    borderColor: 'transparent',
                    borderBottomColor: '#ECEDED',
                    borderWidth: 1,

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

    useEffect(() => {
        if (data?.data) {
            console.log("Kimz ~ Home ~ data:", data)
        }
    }, [data])

    const refreshHome = () => {
        refetch()
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Header bellBool notificationCount={data?.data?.notification} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={({ route }) => {
                    switch (route.key) {
                        case 'first':
                            return <FirstRoute onRefresh={() => refreshHome()} loading={(isLoading || isFetching)} data={data?.data} chart={data?.data?.chart?.month} />
                        case 'second':
                            return <SecondRoute onRefresh={() => refreshHome()} loading={(isLoading || isFetching)} data={data?.data} chart={data?.data?.chart?.weakly} />
                        case 'third':
                            return <ThirdRoute onRefresh={() => refreshHome()} loading={(isLoading || isFetching)} data={data?.data} chart={data?.data?.chart?.daily} />
                        default:
                            return null;
                    }
                }}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    );
}

export { Home };
