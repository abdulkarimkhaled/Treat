import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { calcHeight } from '../../config/metrics';
import { BookingItem } from '../../components/organisms/BookingItem';
export function FirstRoute() {

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: calcHeight(50) }} style={styles.container} >
            <BookingItem
                name='Username'
                id='#45545'
                appointment='4/10/2023 - 11.00PM'
                date='4/3/2023 - 09.00PM'
                leftToAccept='04.30 left for accept'
                total='200'
                type={'customer'}
                status='Paid'
                downloadReceipt
                shareButton
            />
            <BookingItem
                name='Username'
                buttons
                id='#45545'
                appointment='4/10/2023 - 11.00PM'
                date='4/3/2023 - 09.00PM'
                leftToAccept='04.30 left for accept'
                total='200'
                type={'customer'}
                status='Paid'
                giftIcon
            />
        </ScrollView>
    )
};