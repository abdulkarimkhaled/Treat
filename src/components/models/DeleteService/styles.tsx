import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: calcHeight(27),
        paddingBottom: calcHeight(30),
        borderRadius: calcWidth(25),
        width: calcWidth(370)
    },
    deleteText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(21),
        fontWeight: '600',
        color: '#4E5F56',
        paddingBottom: calcHeight(15)
    },
    serviceText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(21),
        fontWeight: '600',
        color: '#111111'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: calcHeight(39),
    },
    yesButton: {
        width: calcWidth(145),
        borderRadius: calcWidth(15),
        marginRight: calcWidth(20)
    },
    yesText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: '#fff'
    },
    noText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: '#C1C1C1'
    },
    gradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(19),
        borderRadius: calcWidth(15),
        borderWidth: 1,
        borderColor: 'transparent'
    },
    noButton: {
        width: calcWidth(145),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(19),
        borderRadius: calcWidth(15),
        borderWidth: 1,
        borderColor: '#C1C1C1'
    }
})