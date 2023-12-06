import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    conatiner: {
        marginBottom: calcHeight(40),
        marginHorizontal: calcWidth(30),
        alignItems: 'center',
        padding: calcHeight(30),
        backgroundColor: colors.white,
        borderRadius: calcWidth(10)
    },
    leftText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#A4ADA8',
    },
    rightText: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#4A5A51',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: calcWidth(310),
        marginBottom: calcHeight(8)
    },
    leftToAccept: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(10),
        fontWeight: '400',
        color: '#B2866B',
        textDecorationLine: 'underline',
        width: calcWidth(310),
        textAlign: 'right',
        marginTop: calcHeight(-8)
    },
    selectedServices: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#4A5A51',
        marginTop: calcHeight(12),
        width: calcWidth(310),
    },
    servicesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    serviceName: {
        width: calcWidth(140),
        marginRight: calcWidth(45),
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12),
        fontWeight: '400',
        color: '#050505',
    },
    sep: {
        marginTop: calcHeight(12),
        marginBottom: calcHeight(8),
    },
    customerNumber: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: '#A4ADA8',
        marginLeft: calcWidth(8),
        marginRight: calcWidth(30)
    },
    price: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(16),
        fontWeight: '400',
        color: '#A4ADA8',
        width: calcWidth(60),
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: calcWidth(310),
        marginTop: calcHeight(24)
    },
    totalText: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#4A5A51',
    },
    totalPrice: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(18),
        fontWeight: '700',
        color: '#B2866B',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: calcWidth(310),
        marginTop: calcHeight(12)
    },
    acceptButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#5EAF82',
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(150),
        paddingVertical: calcHeight(11)
    },
    acceptText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#5EAF82',
    },
    acceptCustomerButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#607569',
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(150),
        paddingVertical: calcHeight(11),
        backgroundColor: '#607569'
    },
    acceptCustomerText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#fff',
    },
    rejectButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#9E9E9E',
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(150),
        paddingVertical: calcHeight(11)
    },
    rejectText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#9E9E9E',
    },
    rejectCustomerButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#B2866B',
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(150),
        paddingVertical: calcHeight(11)
    },
    rejectCustomerText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#B2866B',
    },
    cancelButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#B2866B',
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(310),
        paddingVertical: calcHeight(11)
    },
    cancelText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#B2866B',
    },
    bookingContainer: {
        backgroundColor: 'white',
        marginHorizontal: calcWidth(30),
        width: calcWidth(310),
        alignSelf: 'center',
        marginTop: calcHeight(20),
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
    totalServicePrice: {
        fontSize: calcWidth(12),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        width: '25%',
    },
    shareButton: {
        alignSelf: 'center',
        width: calcWidth(258),
        borderRadius: calcWidth(10),
        height: calcHeight(40)
    },
    gradientButton: {
        borderRadius: calcWidth(10),
        height: calcHeight(40),
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '500',
        color: colors.white,
    },
    iconContainer: {
        width: calcWidth(44),
        height: calcHeight(40),
        borderRadius: calcWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
    },
    giftContainer: {
        position: 'absolute',
        width: calcWidth(40),
        height: calcWidth(40),
        borderRadius: calcWidth(20),
        borderWidth: calcWidth(1),
        borderColor: '#B2866B',
        alignItems: 'center',
        justifyContent: 'center',
        top: calcWidth(-20),
        left: calcWidth(30),
        backgroundColor: 'white'
    }
})