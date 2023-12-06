import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: calcHeight(32),
        paddingBottom: calcHeight(30),
        width: calcWidth(430),
        alignSelf: 'center',
        borderTopLeftRadius: calcWidth(30),
        borderTopRightRadius: calcWidth(30),
    },
    titleText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(17),
        fontWeight: '700',
        color: '#4A5A51',
        paddingVertical: calcHeight(10)
    },
    subTitleText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(16),
        fontWeight: '400',
        color: '#A4ADA8',
        textAlign: 'center',
        width: calcWidth(260)
    },
    buttons: {
        alignSelf: 'center',
        marginTop: calcHeight(24),
    },
    shareButton: {
        width: calcWidth(370),
        borderRadius: calcWidth(15),
    },
    shareText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: '#fff'
    },
    manualText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '600',
        color: '#4A5A51',
        textDecorationLine: 'underline',
        alignSelf: 'center'
    },
    gradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(18),
        borderRadius: calcWidth(15),
        marginBottom: calcHeight(10)
    },
    bookingContainer: {
        backgroundColor: '#fff',
        borderRadius: calcWidth(15),
        paddingHorizontal: calcWidth(22),
        paddingVertical: calcHeight(10),
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(13)
    },
    bookingHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    booking: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
    },
    secondBookingHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: calcHeight(19)
    },
    thirdBookingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: calcHeight(6)
    },
    services: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#7D7D7D',
        width: '25%',
    },
    start: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#7D7D7D',
        width: '25%',
    },
    total: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#7D7D7D',
        width: '25%',
    },
    serviceInfo: {
        fontSize: calcWidth(12),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        width: '25%',
    },
    dateDetails: {
        fontSize: calcWidth(12),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        width: '25%',
    },
    totalPrice: {
        fontSize: calcWidth(12),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        width: '25%',
    },
})