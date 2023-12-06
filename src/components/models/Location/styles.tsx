import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: calcHeight(40),
        paddingBottom: calcHeight(30),
        width: calcWidth(430),
        alignSelf: 'center',
    },
    titleText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(21),
        fontWeight: '600',
        color: '#4E5F56',
        paddingVertical: calcHeight(10)
    },
    subTitleText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(16),
        fontWeight: '400',
        color: '#A4ADA8',
        textAlign: 'center',
        width: calcWidth(260)
    },
    buttons: {
        alignSelf: 'center',
        marginTop: calcHeight(24),
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
    manualText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '600',
        color: '#4A5A51',
        textDecorationLine: 'underline',
        alignSelf: 'center'
    },
    gradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(18),
        borderRadius: calcWidth(15),
        marginBottom: calcHeight(10)
    },
})