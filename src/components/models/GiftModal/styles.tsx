import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backColor,
        paddingBottom: calcHeight(30),
        width: calcWidth(430),
        borderTopLeftRadius: calcWidth(30),
        borderTopRightRadius: calcWidth(30),
        alignItems: 'center'
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
    gradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(18),
        borderRadius: calcWidth(15),
        marginBottom: calcHeight(10)
    },
    list: {
        marginTop: calcHeight(30),
        width: '100%',
        maxWidth: calcWidth(370)
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
    singleServiceContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: calcWidth(10),
        marginBottom: calcHeight(10),
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
        alignItems: 'center',
        justifyContent: 'space-between',
        width: calcWidth(370)
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
})