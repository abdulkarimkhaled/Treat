import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    root: {
        marginHorizontal: calcWidth(30),
    },
    confirmOTPText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(26),
        fontWeight: '700',
        color: '#4A5A51',
        marginTop: calcHeight(60),
        marginHorizontal: calcWidth(30)
    },
    dataText: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(16),
        fontWeight: '400',
        color: '#4A5A51',
        marginTop: calcHeight(20),
        marginHorizontal: calcWidth(30)
    },
    code: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
        marginTop: calcHeight(50),
        marginHorizontal: calcWidth(30)
    },
    addServiceButton: {
        alignSelf: 'center',
        width: calcWidth(369),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(150)
    },
    gradientButton: {
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(19),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addServiceText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: colors.white,
    },
    cell: {
        width: calcWidth(85),
        minHeight: calcHeight(72),
        borderRadius: calcWidth(16),
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        marginRight: calcWidth(9),
        marginTop: calcHeight(10)
    },
    cellText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(32),
        color: '#4A5A51',
        fontWeight: '600',
        paddingVertical: calcHeight(16)

    },
    success: {
        borderColor: 'green'
    },
    successText: {
        color: 'green'
    },
    successBottomText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12),
        color: 'green',
        marginTop: calcHeight(8)
    },
    error: {
        borderColor: 'red'
    },
    errorText: {
        color: 'red'
    },
    expires: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(21),
        fontWeight: '400',
        color: '#4A5A51',
        alignSelf: 'center',
        marginTop: calcHeight(16)
    },
    time: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(21),
        color: '#4A5A51',
        fontWeight: '700',
    },
    resendText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '600',
        color: '#4A5A51',
        alignSelf: 'center',
        marginTop: calcHeight(16),
        textDecorationLine: 'underline'
    },
    backButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        borderRadius: calcWidth(15),
        borderWidth: calcWidth(2),
        borderColor: '#4A5A51',
        marginTop: calcHeight(10),
        paddingVertical: calcHeight(19),
        width: calcWidth(370)
    },
    backText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: '#4A5A51',
    }
});

export default styles;
