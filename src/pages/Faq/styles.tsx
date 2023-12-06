import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    header: {
        paddingHorizontal: calcWidth(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: calcWidth(21),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222'
    },
    accord: {
        width: calcWidth(370),
        alignSelf: 'center',
        borderRadius: calcWidth(15),
        marginTop: calcHeight(30)
    },
    icon: {
        transform: [{ rotate: '270deg' }]
    },
    title: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        alignSelf: 'center',
        width: calcWidth(327),
        marginTop: calcHeight(15),
        marginBottom: calcHeight(15),
        marginLeft: calcWidth(14)
    },
    body: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#7A7A7A',
        alignSelf: 'center',
        width: calcWidth(327),
        marginBottom: calcHeight(20),

    }
});

export default styles;
