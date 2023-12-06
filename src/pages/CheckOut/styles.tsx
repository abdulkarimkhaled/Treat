import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    header: {
        paddingHorizontal: calcWidth(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: calcWidth(21),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222'
    },
    one: {
        backgroundColor: '#B2866B',
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: calcWidth(10)
    },
    oneText: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    review: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#050505',
    },
    two: {
        backgroundColor: '#AFAFAF',
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: calcWidth(10)
    },
    line: {
        height: 1,
        width: calcWidth(155),
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#A4ADA8',
        borderStyle: 'dashed',
        marginHorizontal: calcWidth(6),
    },
    couponContainer: {
        backgroundColor: '#fff',
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(10),
        paddingHorizontal: calcWidth(25),
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(40)
    },
    inputBack: {
        backgroundColor: '#EBEBEB',
        borderRadius: calcWidth(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    input: {
        width: calcWidth(160),
        paddingLeft: calcWidth(20),
        color: 'grey'
    },
    couponButtonText: {
        fontSize: calcWidth(12),
        fontFamily: fonts.BoldSans,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    couponButton: {
        backgroundColor: '#4A5A51',
        paddingHorizontal: calcWidth(25),
        paddingVertical: calcHeight(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstBall: {
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        left: calcWidth(-15),
        top: calcHeight(15)
    },
    secondBall: {
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        right: calcWidth(-15),
        top: calcHeight(15)
    },
    bookingContainer: {
        backgroundColor: '#fff',
        borderRadius: calcWidth(15),
        paddingHorizontal: calcWidth(22),
        paddingVertical: calcHeight(10),
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(26)
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
    payWalletContainer: {
        flexDirection: 'row',
        width: calcWidth(370),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: calcHeight(26)
    },
    payWalletText: {
        fontSize: calcWidth(15),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#050505',
    },
    paymentContainer: {
        backgroundColor: '#fff',
        borderRadius: calcWidth(15),
        paddingHorizontal: calcWidth(30),
        paddingVertical: calcHeight(10),
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(26)
    },
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: calcHeight(26)
    },
    payment: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
    },
    firstBall2: {
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        left: calcWidth(-15),
        top: calcHeight(84)
    },
    secondBall2: {
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        right: calcWidth(-15),
        top: calcHeight(84)
    },
    paymentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: calcHeight(10)
    },
    firstSection: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#050505',
    },
    secondSection: {
        fontSize: calcWidth(16),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#4A5A51',
        // width: calcWidth(70)
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: calcHeight(30),
    },
    secondSectionTotal: {
        fontSize: calcWidth(16),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#B2866B',
    },
    addServiceButton: {
        alignSelf: 'center',
        width: calcWidth(369),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(60)
    },
    gradientButton: {
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(19),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addServiceText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: colors.white,
    },
});

export default styles;
