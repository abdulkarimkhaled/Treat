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
    terms: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(16),
        fontWeight: '400',
        color: '#4A5A51',
        alignSelf: 'center',
        width: calcWidth(370),
        marginTop: calcHeight(28)
    }
});

export default styles;
