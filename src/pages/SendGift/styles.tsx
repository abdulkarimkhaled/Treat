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
    accord: {
        width: calcWidth(370),
        alignSelf: 'center',
        borderRadius: calcWidth(15),
        marginTop: calcHeight(30)
    },
    icon: {
        transform: [{ rotate: '270deg' }]
    },
    title: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        alignSelf: 'center',
        width: calcWidth(327),
        marginTop: calcHeight(15),
        marginBottom: calcHeight(15),
        marginLeft: calcWidth(14)
    },
    body: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#7A7A7A',
        alignSelf: 'center',
        width: calcWidth(327),
        marginBottom: calcHeight(20),

    },
    noti: {
        alignSelf: 'center',
        fontSize: calcWidth(12),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#A4ADA8',
        marginTop: calcHeight(8)
    },
    messageInput: {
        height: calcHeight(100),
        alignItems: 'flex-start'
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
        fontSize: calcWidth(14),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#050505',
    },
    selectedServiceTitle: {
        fontSize: calcWidth(18),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222',
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(12)
    },
    singleServiceContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: calcWidth(10),
        marginBottom: calcHeight(10),
        paddingRight: calcWidth(20),
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(12)
    },
    seriveImage: {
        width: calcWidth(120),
        height: calcWidth(120),
        marginRight: calcWidth(20)
    },
    singleTitle: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: "#050505",
        // marginTop: calcHeight(20)
    },
    price: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: "#B2866B",
        marginTop: calcHeight(8)
    },
    timeMin: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: "#A4ADA8",
        marginTop: calcHeight(8)
    },
    greyDot: {
        width: calcWidth(4),
        height: calcWidth(4),
        borderRadius: calcWidth(2),
        backgroundColor: "#EEEEEE",
        marginTop: calcHeight(8),
        marginHorizontal: calcWidth(14)
    },
    details: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12),
        fontWeight: '400',
        color: "#7D7D7D",
        marginTop: calcHeight(8)
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(50)
    },
    gradientBookNow: {
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(19),
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(200),
        flexDirection: 'row'
    },
    bookNow: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: "#FFFFFF",
        marginLeft: calcWidth(8)
    },
    total: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: "#050505",
    },
    totalServices: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: "#A4ADA8",
    },
    totalPrice: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: "#B2866B",
        marginTop: calcHeight(8)
    },
});

export default styles;
