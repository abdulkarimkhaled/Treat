import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    conatiner: {
        borderRadius: calcWidth(10),
        marginHorizontal: calcWidth(30),
        backgroundColor: colors.white,
        marginBottom: calcHeight(10),
        padding: calcHeight(10),
        flexDirection: 'row'
    },
    image: {
        width: calcWidth(100),
        height: calcHeight(80),
        borderRadius: calcWidth(5)
    },
    floating: {
        position: 'absolute',
        left: calcWidth(5),
        top: calcWidth(5),
        borderRadius: calcWidth(3),
        paddingHorizontal: calcWidth(3)
    },
    location: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(10),
        fontWeight: '400',
        color: '#4A5A51',
    },
    title: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
        paddingBottom: calcHeight(6)
    },
    floatingText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(8),
        fontWeight: '600',
        color: colors.white
    },
    middleView: {
        marginLeft: calcWidth(14),
        paddingVertical: calcHeight(12),
        justifyContent: 'space-between',
        width: calcWidth(214),
    },
    ratingContainer: {
        flexDirection: 'row',

    },
    rating: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(10),
        fontWeight: '600',
        color: '#B2866B',
        marginLeft: calcWidth(5)
    },
    rates: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(8),
        fontWeight: '600',
        color: '#A4ADA8',
        marginLeft: calcWidth(3),
        marginRight: calcWidth(14),
        paddingTop: calcHeight(2)
    },
    distance: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(10),
        fontWeight: '600',
        color: '#A4ADA8',
        marginLeft: calcWidth(3)
    },
})