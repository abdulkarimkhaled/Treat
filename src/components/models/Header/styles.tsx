import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        width: calcWidth(370),
        paddingTop: Platform.OS === 'android' ? calcHeight(28) : calcHeight(45),
        alignItems: 'center',
        alignSelf: 'center'
    },
    smallerContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: calcHeight(20),
    },
    line: {
        width: calcWidth(370),
        height: calcHeight(1),
        backgroundColor: '#495B5133'
    },
    notificationsContainer: {
        position: 'absolute',
        top: calcWidth(-7),
        right: calcWidth(-3),
        backgroundColor: '#B2866B',
        width: calcWidth(14),
        height: calcWidth(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calcWidth(7),
        zIndex: 10
    },
    count: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(8),
        fontWeight: '600',
        color: '#FFFFFF'
    }
})