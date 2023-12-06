import React, { useEffect } from 'react';
import { FlatList, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import { Header } from '../../components/models/Header';
import Back from '../../icons/svgs/Back';
import NavigationService from '../../navigation/NavigationService';
import { useGetNotificationsQuery, useReadAllNotificationMutation, useReadOneNotificationMutation } from '../../apis/generalAPIs';
import { useSelector } from 'react-redux';

function Notifications(props: any) {

    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)

    const { data, refetch, isLoading, isFetching } = useGetNotificationsQuery(authToken)

    const [updateOne, updateOneResults] = useReadOneNotificationMutation()
    const [readAll, readAllResults] = useReadAllNotificationMutation()

    const reaOneNotification = (id: any) => {
        updateOne({
            token: authToken,
            id
        })
    }

    const readAllNotificaitons = () => {
        readAll(authToken)
    }


    useEffect(() => {
        if (updateOneResults.isSuccess || readAllResults.isSuccess) {
            refetch()
        }
    }, [updateOneResults, readAllResults])


    const renderNew = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                onPress={() => reaOneNotification(item.id)}
                disabled={item.read}
                style={styles.newContainer} >
                <View style={styles.imageContainer} >
                    <Image
                        style={styles.notificationImage}
                        resizeMode='contain'
                        source={{ uri: item.sender.image }}
                    />
                </View>
                <Text style={styles.title} >
                    {item.body}
                </Text>
                <View style={styles.thirdPartion} >
                    <Text style={styles.time} >{item.date_1}</Text>
                    {!item.read ? <View style={styles.notRead} /> : <View />}
                </View>
            </TouchableOpacity>
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
                    Notifications
                </Text>
            </View>

            <View style={styles.miniHeader} >
                {/* <Text style={styles.showAll} >SHOW ALL</Text> */}
                <TouchableOpacity onPress={() => readAllNotificaitons()} >
                    <Text style={styles.markAll}>Mark all as read</Text>
                </TouchableOpacity>
            </View>
            <View >
                {data?.data?.notifications.filter((item: any) => !item.read).length > 0 ?
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                tintColor="#4A5A51"
                                refreshing={(isFetching || isLoading)}
                                onRefresh={() => refetch()}
                            />
                        }
                        refreshing={(isFetching || isLoading)}
                        data={data?.data?.notifications.filter((item: any) => !item.read)}
                        renderItem={renderNew}
                        showsVerticalScrollIndicator={false}
                        style={styles.list}
                        ListEmptyComponent={<View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }} >
                            <Text>No Notifications</Text>
                        </View>}
                        ListHeaderComponent={<Text style={styles.listHeader} >New</Text>}
                    /> : <View />}
                {data?.data?.notifications.filter((item: any) => item.read).length > 0 ?
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                tintColor="#4A5A51"
                                refreshing={(isFetching || isLoading)}
                                onRefresh={() => refetch()}
                            />
                        }
                        refreshing={(isFetching || isLoading)}
                        data={data?.data?.notifications.filter((item: any) => item.read)}
                        style={styles.list}
                        renderItem={renderNew}
                        ListEmptyComponent={<View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }} >
                            <Text>No Notifications</Text>
                        </View>}
                        ListHeaderComponent={<Text style={styles.listHeader} >Earlier</Text>}
                        showsVerticalScrollIndicator={false}
                    /> : <View />}
            </View>
        </View>
    );
}

export { Notifications };
