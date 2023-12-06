import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { calcHeight } from '../../config/metrics';
import { BookingItem } from '../../components/organisms/BookingItem';
export function SecondRoute() {

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: calcHeight(50) }} style={styles.container} >
            <BookingItem
                name='Username'
                buttons
                id='#45545'
                appointment='4/10/2023 - 11.00PM'
                date='4/3/2023 - 09.00PM'
                leftToAccept='04.30 left for accept'
                total='200'
                type={'customer'}
                status='Accepted'
                payNow
                shareButton
            />
            <BookingItem
                name='Username'
                id='#45545'
                appointment='4/10/2023 - 11.00PM'
                date='4/3/2023 - 09.00PM'
                leftToAccept='04.30 left for accept'
                total='200'
                type={'customer'}
                status='Pending'
                rejectAccept
                giftIcon
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
                status='Pending'
                timeLeft='54 min'
                shareButton
            />
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
        </ScrollView>
    )
};