import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    conatiner: {
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(22)
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingLeft: calcWidth(16),
        marginTop: calcHeight(10),
        borderRadius: calcWidth(15),
        justifyContent: 'space-between',
        paddingRight: calcWidth(5),
        paddingVertical: calcWidth(5),
        alignItems: 'center'
    },
    iconContainer: {
        width: calcWidth(50),
        height: calcWidth(50),
        borderRadius: calcWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
    },
    title: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
        marginLeft: calcWidth(10)
    },
    input: {
        width: calcWidth(280),
        color: "grey"
    }
})