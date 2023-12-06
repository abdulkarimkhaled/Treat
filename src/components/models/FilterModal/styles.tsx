import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

        paddingTop: calcHeight(30),
        paddingBottom: calcHeight(30),
        width: calcWidth(430),
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: calcWidth(30),
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    cancel: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#495B51',
    },
    filter: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#050505',
    },
    available: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#050505',
        marginTop: calcHeight(30),
        width: calcWidth(370)
    },
    reset: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#CE4B4B',
    },
    dateTitle: {
        fontSize: calcWidth(18),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222',
        alignSelf: 'center',
        marginTop: calcHeight(8)
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
        paddingHorizontal: calcWidth(30),
        marginTop: calcHeight(10),
        width: '100%'
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
    serviceContainer: {
        borderRadius: calcWidth(10),
        borderWidth: calcWidth(1),
        borderColor: '#4A5A51',
        width: calcWidth(85),
        paddingVertical: calcHeight(9),
        justifyContent: 'center',
        alignItems: "center",
        marginRight: calcWidth(14),
        marginBottom: calcHeight(10)
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
    sliderContainer: {
        width: calcWidth(370)
    },
    thumbStyle: {
        backgroundColor: '#B2866B',
        width: calcWidth(24),
        height: calcWidth(24),
        borderRadius: calcWidth(12)
    },
    tracker: {
        backgroundColor: '#EBEBEB'
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: calcHeight(20),
        width: calcWidth(370),
    },
    minValueCont: {
        paddingVertical: calcHeight(10),
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#B2866B',
        width: calcWidth(134),
        alignItems: 'center'
    },
    value: {
        color: '#B2866B',
        fontSize: calcWidth(14),
        fontWeight: "500",
        fontFamily: fonts.Medium
    },
    dash: {
        color: '#B2866B',
        fontSize: calcWidth(14),
        fontWeight: "500",
        fontFamily: fonts.Medium
    },
})