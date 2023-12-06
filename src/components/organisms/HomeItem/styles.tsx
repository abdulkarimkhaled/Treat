import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    conatiner: {
        borderRadius: calcWidth(10),
        marginHorizontal: calcWidth(30),
        backgroundColor: colors.white,
        marginBottom: calcHeight(10),
        padding: calcHeight(20),
        flexDirection: 'row'
    },
    iconContainer: {
        width: calcWidth(60),
        height: calcWidth(60),
        borderRadius: calcWidth(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        marginLeft: calcWidth(20),
        justifyContent: "center"
    },
    id: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(21),
        fontWeight: '700',
        color: '#4A5A51'
    },
    title: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#A4ADA8'
    }
})