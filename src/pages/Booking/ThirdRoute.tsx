import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styles from './styles';
import { calcHeight } from '../../config/metrics';
import { BookingItem } from '../../components/organisms/BookingItem';
import { useSelector } from 'react-redux';
import { useGetOrdersQuery, useUpdateOrderStatusMutation } from '../../apis/generalAPIs';
export function ThirdRoute() {
    const authToken = useSelector((state: { authReducer: { token: string } }) => state?.authReducer?.token)
    const { data, refetch, isFetching, isLoading } = useGetOrdersQuery({ token: authToken, params: { data: 3 } })
    const [updateOrder, updateResult] = useUpdateOrderStatusMutation()

    useEffect(() => {
        if (data?.data) {
            console.log("Kimz ~ useEffect ~ data?.data:", data?.data)
        }
    }, [data])

    const updateOrderStatus = (id: number, type: string) => {
        let body: {
            id: number;
            status: number;
            cancel_reason?: string
        } = {
            id,
            status: type == 'accept' ? 2 : 4
        }
        if (type == 'reject') {
            body.cancel_reason = 'nullnullnull'
        }
        updateOrder({
            token: authToken,
            body
        })
    }

    useEffect(() => {
        if (updateResult.isSuccess) {
            console.log("Kimz ~ useEffect ~ updateResult:", updateResult)
            refetch()
        }
        if (updateResult.isError) {
            console.log("Kimz ~ useEffect ~ updateResult.isError:", updateResult)
        }
    }, [updateResult])

    return (
        <FlatList
            data={data?.data}
            refreshing={(isFetching || isLoading)}
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
                        buttons={item.status == 'Pending'}
                        onAccept={() => updateOrderStatus(item.id, 'accept')}
                        onReject={() => updateOrderStatus(item.id, 'reject')}
                    />
                )
            }}
            style={styles.container} contentContainerStyle={{ paddingBottom: calcHeight(50) }} />
        // <BookingItem
        //     name='Username'
        //     id='#45545'
        //     appointment='4/10/2023 - 11.00PM'
        //     date='4/3/2023 - 09.00PM'
        //     leftToAccept='04.30 left for accept'
        //     total='200'
        //     services={[{
        //         name: 'Special haircuts, #1 and skin fades',
        //         customer: 2,
        //         price: '50'
        //     }, {
        //         name: 'Special haircuts, #1 and skin fades',
        //         customer: 2,
        //         price: '50'
        //     }]}
        // />
        // {/* <BookingItem
        //     name='Username'
        //     buttons
        //     id='#45545'
        //     appointment='4/10/2023 - 11.00PM'
        //     date='4/3/2023 - 09.00PM'
        //     leftToAccept='04.30 left for accept'
        //     total='200'
        //     services={[{
        //         name: 'Special haircuts, #1 and skin fades',
        //         customer: 2,
        //         price: '50'
        //     }, {
        //         name: 'Special haircuts, #1 and skin fades',
        //         customer: 2,
        //         price: '50'
        //     }]}
        // /> */}
    )
};