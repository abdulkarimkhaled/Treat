import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import { CurveType, LineChart, ruleTypes } from "react-native-gifted-charts"
import { calcHeight, calcWidth } from '../../config/metrics';
import { HomeItem } from '../../components/organisms/HomeItem';
import Calendar from '../../icons/svgs/Calendar';
import PurchaseTag from '../../icons/svgs/PurchaseTag';
import CheckCircle from '../../icons/svgs/CheckCircle';
import XCircle from '../../icons/svgs/XCircle';
import CalendarExclam from '../../icons/svgs/CalendarExclam';
export function FirstRoute() {
    const lineData = [
        { value: 0 },
        { value: 2 },
        { value: 1 },
        { value: 4 },
        { value: 1 },
        { value: 3 },
        { value: 1 },
        { value: 7 },
        { value: 3 },
        { value: 2 },
        { value: 8 },
        { value: 9 },
    ];

    const lineData2 = [
        { value: 5 },
        { value: 3 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 2 },
        { value: 7 },
        { value: 8 },
        { value: 5 },
        { value: 2 },
        { value: 7 },
        { value: 3 },
    ];
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: calcHeight(50) }} style={styles.container} >
            <LineChart
                verticalLinesUptoDataPoint={true}
                data={lineData}
                data2={lineData2}
                height={calcHeight(230)}
                width={calcWidth(340)}
                spacing={calcWidth(60)}
                initialSpacing={calcWidth(40)}
                thickness1={3}
                thickness2={3}
                color1="#4A5A51"
                color2="#B2866B"
                textColor1="green"
                hideDataPoints1={true}
                hideDataPoints2={true}
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
                yAxisThickness={0}
                xAxisThickness={0}
                noOfSections={5}
                rulesType={'solid'}
                rulesThickness={1}
                rulesColor={'#F6F6F6'}
            />
            <View style={{ marginTop: calcHeight(40) }} />
            <HomeItem color='#ECEEED' title='Bookings' icon={<Calendar />} id={200} />
            <HomeItem color='#F7F3F0' title='Sales' icon={<PurchaseTag />} id={3541} />
            <HomeItem color='#EEF7F2' title='Accepted Reservations' icon={<CheckCircle />} id={181} />
            <HomeItem color='#FF00001A' title='Rejected Reservations' icon={<XCircle />} id={19} />
            <HomeItem color='#EBEBEB' title='Abandoned Reservations' icon={<CalendarExclam />} id={57} />
        </ScrollView>
    )
};