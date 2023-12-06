import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backColor,
        paddingBottom: calcHeight(30),
        width: calcWidth(430),
        alignSelf: 'center',
        borderTopLeftRadius: calcWidth(30),
        borderTopRightRadius: calcWidth(30),
    },
    available: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#050505',
        marginTop: calcHeight(30),
        width: calcWidth(370),
        alignSelf: 'center'
    },
    dateTitle: {
        fontSize: calcWidth(18),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222',
        alignSelf: 'center',
        marginTop: calcHeight(8)
    },

    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: calcHeight(30),
        width: calcWidth(370)
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
    headerPic: {
        width: '100%',
        height: calcHeight(290),
    },
    title: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(18),
        fontWeight: '500',
        color: "#050505",
        marginBottom: calcHeight(6)
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: calcWidth(30),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: calcHeight(20)
    },
    serviceTime: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: "#050505",
        marginLeft: calcWidth(10)
    },
    servicePrice: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(21),
        fontWeight: '700',
        color: "#B2866B",
    },
    about: {
        fontFamily: fonts.BoldSans,
        fontWeight: '600',
        fontSize: calcWidth(14),
        color: '#222222',

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
    sep: {
        width: calcWidth(370),
        alignSelf: 'center',
        height: calcHeight(1),
        backgroundColor: '#EBEBEB',
        marginTop: calcHeight(20)
    },
    personsAmount: {
        fontFamily: fonts.Regular,
        fontWeight: '400',
        fontSize: calcWidth(14),
        color: '#7D7D7D',
        width: calcWidth(50),
        textAlign: 'center'
    },
    add: {
        fontFamily: fonts.Bold,
        fontWeight: '700',
        fontSize: calcWidth(21),
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#4A5A51',
        borderRadius: calcWidth(5),
        width: calcWidth(30),
        height: calcWidth(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeContainer: {
        borderRadius: calcWidth(10),
        borderWidth: calcWidth(1),
        borderColor: '#AFAFAF',
        width: calcWidth(85),
        paddingVertical: calcHeight(7),
        justifyContent: 'center',
        alignItems: "center",
        marginRight: calcWidth(10)
    },
    time: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: "#AFAFAF"
    },
    selectedTime: {
        borderColor: '#B2866B',
        backgroundColor: '#B2866B'
    },
    selectedTimeText: {
        color: "#fff"
    },
    list: {
        marginTop: calcHeight(10),
        width: '100%'
    },
    extraPortion: {
        height: calcHeight(270),
        width: calcWidth(370),
        borderRadius: calcWidth(15),
    },
    aboutText: {
        height: calcHeight(100),
    },
})