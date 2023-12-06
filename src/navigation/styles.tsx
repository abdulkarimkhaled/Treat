import { StyleSheet } from 'react-native'
import { colors, fonts } from '../config/appStyles';
import { calcHeight, calcWidth } from '../config/metrics';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#4A5A51',
        paddingHorizontal: calcWidth(20),
        height: calcHeight(53),
    },
    tabContainer: {
        flex: 1,
        paddingBottom: calcHeight(18),
        alignItems: 'center',
        width: calcWidth(60),
        height: calcWidth(53),
    },
    label: {
        fontSize: calcWidth(10),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#A4ADA8'
    }
})
export default styles;