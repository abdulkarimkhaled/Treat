import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    version: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#4A5A51',
        marginBottom: calcHeight(8)
    },
    copyRight: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#4A5A51',
    }
});

export default styles;
