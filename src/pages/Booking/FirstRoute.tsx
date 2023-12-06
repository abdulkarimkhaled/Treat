import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styles from './styles';
import { calcHeight } from '../../config/metrics';
import { BookingItem } from '../../components/organisms/BookingItem';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../apis/generalAPIs';
export function FirstRoute() {
    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)
    const { data, isFetching, isLoading, refetch } = useGetOrdersQuery({ token: authToken, params: { data: 1 } })

    return (
        <FlatList
            data={data?.data}
            refreshControl={
                <RefreshControl
                    tintColor="#4A5A51"
                    refreshing={(isFetching || isLoading)}
                    onRefresh={() => refetch()}
                />
            }
            renderItem={({ item, index }) => {
                return (
                    <BookingItem
                        name={'Username'}
                        id={'#' + item.id}
                        appointment={item.date}
                        date={item.created_at}
                        total={item.services.reduce((a: any, b: any) => a + parseInt(b.price), 0)}
                        services={item.services}
                    />
                )
            }}
            style={styles.container} contentContainerStyle={{ paddingBottom: calcHeight(50) }} />
    )
};