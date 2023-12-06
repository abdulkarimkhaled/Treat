import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    conatiner: {
        marginBottom: calcHeight(13),
        flexDirection: 'row',
        marginHorizontal: calcWidth(28),
        alignItems: 'center',
        borderBottomColor: '#495B5133',
        borderBottomWidth: 1,
        paddingBottom: calcHeight(13)
    },
    title: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#4A5A51',
        marginLeft: calcWidth(10)
    },
    icon: {
        width: calcWidth(24),
        height: calcWidth(24),
        alignItems: 'center',
        justifyContent: 'center'
    }
})