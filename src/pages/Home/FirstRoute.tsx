import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import styles from './styles';
import { CurveType, LineChart, ruleTypes } from "react-native-gifted-charts"
import { calcHeight, calcWidth } from '../../config/metrics';
import { HomeItem } from '../../components/organisms/HomeItem';
import Calendar from '../../icons/svgs/Calendar';
import PurchaseTag from '../../icons/svgs/PurchaseTag';
import CheckCircle from '../../icons/svgs/CheckCircle';
import XCircle from '../../icons/svgs/XCircle';
import CalendarExclam from '../../icons/svgs/CalendarExclam';
export const FirstRoute = (props: any) => {
    const [booking, setbooking] = useState<any>([])
    const [pending, setpending] = useState<any>([])
    const [rejected, setrejected] = useState<any>([])
    const [sales, setsales] = useState<any>([])
    useEffect(() => {
        if (props.chart) {
            let tempBooking = []
            let tempPending = []
            let tempRejected = []
            let tempSales = []
            for (let i = 0; i < 12; i++) {
                tempBooking.push({ value: props.chart.booking[i] })
                tempPending.push({ value: props.chart.pending[i] })
                tempRejected.push({ value: props.chart.rejected[i] })
                tempSales.push({ value: props.chart.sales[i] })
            }
            setbooking(tempBooking)
            setpending(tempPending)
            setrejected(tempRejected)
            setsales(tempSales)
        }

    }, [props])

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    tintColor="#4A5A51"
                    refreshing={props.loading}
                    onRefresh={() => props.onRefresh()}
                />
            }
            contentContainerStyle={{ paddingBottom: calcHeight(50) }} style={styles.container} >
            <LineChart
                verticalLinesUptoDataPoint={true}
                data={booking}
                data2={pending}
                data3={rejected}
                data4={sales}
                height={calcHeight(230)}
                width={calcWidth(340)}
                spacing={calcWidth(60)}
                initialSpacing={calcWidth(40)}
                thickness1={3}
                thickness2={3}
                thickness3={3}
                thickness4={3}
                color1="#4A5A51"
                color2="#B2866B"
                color3="#FF00001A"
                color4="#EEF7F2"
                textColor1="green"
                hideDataPoints1={true}
                hideDataPoints2={true}
                hideDataPoints3={true}
                hideDataPoints4={true}
                textFontSize={13}
                xAxisLabelTextStyle={{
                    right: calcWidth(12),
                    fontSize: calcWidth(13)
                }}
                yAxisTextStyle={{
                    fontSize: calcWidth(15)
                }}
                backgroundColor={'white'}
                xAxisLabelTexts={['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']}
                showXAxisIndices={true}
                xAxisIndicesHeight={10}
                xAxisIndicesWidth={1}
                xAxisIndicesColor={'#6C6B71'}
                textColor='#6C6B71'
                textColor2='#6C6B71'
                textColor3='#6C6B71'
                textColor4='#6C6B71'
                yAxisThickness={0}
                xAxisThickness={0}
                noOfSections={5}
                rulesType={'solid'}
                rulesThickness={1}
                rulesColor={'#F6F6F6'}
            />
            <View style={{ marginTop: calcHeight(40) }} />
            <HomeItem color='#ECEEED' title='Bookings' icon={<Calendar />} id={typeof props?.data?.booking === 'number' ? props?.data?.booking : '0'} />
            <HomeItem color='#F7F3F0' title='Sales' icon={<PurchaseTag />} id={typeof props?.data?.sales === 'number' ? props?.data?.sales : '0'} />
            <HomeItem color='#EEF7F2' title='Accepted Reservations' icon={<CheckCircle />} id={typeof props?.data?.accepted === 'number' ? props?.data?.accepted : '0'} />
            <HomeItem color='#FF00001A' title='Rejected Reservations' icon={<XCircle />} id={typeof props?.data?.rejected === 'number' ? props?.data?.rejected : '0'} />
            <HomeItem color='#EBEBEB' title='Abandoned Reservations' icon={<CalendarExclam />} id={typeof props?.data?.abandoned === 'number' ? props?.data?.abandoned : '0'} />
        </ScrollView>
    )
};