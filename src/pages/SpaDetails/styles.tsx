import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    gradientButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: calcHeight(280)
    },
    image: {
        width: '100%',
        height: '100%'
    },
    back: {
        position: 'absolute',
        top: calcWidth(20),
        left: calcWidth(20),
        zIndex: 2
    },
    titleView: {
        flexDirection: 'row',
        paddingHorizontal: calcWidth(30),
        marginTop: calcHeight(30),
        alignItems: 'center',
        justifyContent: "space-between"
    },
    titleImage: {
        width: calcWidth(46),
        height: calcWidth(46),
        borderRadius: calcWidth(23),
        backgroundColor: '#EEEEEE',
        alignItems: "center",
        justifyContent: 'center'
    },
    titleTextContainer: {
        width: calcWidth(290)
    },
    title: {
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        fontSize: calcWidth(21),
        color: '#050505'
    },
    subTitle: {
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        fontSize: calcWidth(14),
        color: '#8A8A8A'
    },
    detailsView: {
        marginTop: calcHeight(24),
        flexDirection: 'row',
        paddingHorizontal: calcWidth(30),
        alignItems: 'center',
    },
    openDay: {
        fontFamily: fonts.Regular,
        fontWeight: '400',
        fontSize: calcWidth(14),
        color: '#050505',
        marginLeft: calcWidth(10),
        width: calcWidth(250)
    },
    stars: {
        fontFamily: fonts.Medium,
        fontWeight: '500',
        fontSize: calcWidth(14),
        color: '#050505'
    },
    sep: {
        width: calcWidth(370),
        alignSelf: 'center',
        height: calcHeight(1),
        backgroundColor: '#EBEBEB',
        marginTop: calcHeight(20)
    },
    about: {
        fontFamily: fonts.BoldSans,
        fontWeight: '600',
        fontSize: calcWidth(14),
        color: '#222222',
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(20)
    },
    aboutDetails: {
        fontFamily: fonts.Regular,
        fontWeight: '400',
        fontSize: calcWidth(14),
        color: '#7D7D7D',
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(8)
    },
    openingContainer: {
        paddingHorizontal: calcWidth(30),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: calcHeight(10)
    },
    greenDot: {
        backgroundColor: '#5EAF82',
        width: calcWidth(6),
        height: calcWidth(6),
        borderRadius: calcWidth(3),
        marginRight: calcWidth(10)
    },
    dayTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    day: {
        fontFamily: fonts.Regular,
        fontWeight: '400',
        fontSize: calcWidth(14),
        color: '#7D7D7D',
    },
    time: {
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        fontSize: calcWidth(14),
        color: '#050505',
        marginTop: calcHeight(3)
    },
    serviceContainer: {
        borderRadius: calcWidth(10),
        borderWidth: calcWidth(1),
        borderColor: '#4A5A51',
        paddingVertical: calcHeight(9),
        justifyContent: 'center',
        alignItems: "center",
        marginRight: calcWidth(14),
        marginBottom: calcHeight(10),
        paddingHorizontal: calcWidth(20)
    },
    service: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: "#4A5A51"
    },
    selectedService: {
        borderColor: '#B2866B',
        backgroundColor: '#B2866B'
    },
    selectedServiceText: {
        color: "#fff"
    },
    list: {
        paddingHorizontal: calcWidth(30),
        marginTop: calcHeight(10),
        flexGrow: 0,
    },
    singleServiceContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: calcWidth(10),
        marginBottom: calcHeight(10),
        marginHorizontal: calcWidth(30),
        paddingRight: calcWidth(20),
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    discountView: {
        position: 'absolute',
        top: calcWidth(10),
        right: calcWidth(10),
        backgroundColor: '#EEF7F2',
        borderRadius: calcWidth(50),
        paddingVertical: calcWidth(2),
        paddingHorizontal: calcWidth(6)
    },
    discount: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(10),
        fontWeight: '600',
        color: "#5EAF82",
    },
    bottomContainer: {
        flexDirection: 'row',
        paddingHorizontal: calcWidth(30),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: calcHeight(30)
    },
    gradientBookNow: {
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(19),
        alignItems: 'center',
        justifyContent: 'center',
        width: calcWidth(200)
    },
    bookNow: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: "#FFFFFF",
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
    selectArea: {
        backgroundColor: '#B2866B',
        width: calcWidth(370),
        alignSelf: 'center',
        borderRadius: calcWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: calcHeight(19)
    },
    selectAreaText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: "#FFFFFF",
        marginLeft: calcWidth(8)
    },
    giftButton: {
        backgroundColor: "#B2866B",
        borderTopLeftRadius: calcWidth(4),
        borderBottomLeftRadius: calcWidth(4),
        paddingVertical: calcHeight(12),
        paddingHorizontal: calcWidth(10),
        position: 'absolute',
        zIndex: 3,
        right: 0,
        top: calcHeight(-22),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    giftText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(15),
        fontWeight: '600',
        color: "#FFFFFF",
        marginLeft: calcWidth(8)
    }
});

export default styles;
