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
    addServiceButton: {
        alignSelf: 'center',
        width: calcWidth(370),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(20)
    },
    gradientButton: {
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(19),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    addServiceText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: colors.white,
        marginLeft: calcWidth(10)
    },
    emailButton: {
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(18),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: calcWidth(2),
        borderColor: '#4A5A51',
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(10)
    },
    emailText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: '#4A5A51',
        marginLeft: calcWidth(10)
    }
});

export default styles;
