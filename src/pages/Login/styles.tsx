import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
        justifyContent: 'center',
        paddingTop: calcHeight(100)
    },
    header: {
        backgroundColor: colors.mainColor,
        width: "100%",
        paddingTop: calcHeight(35),
        paddingBottom: calcHeight(10),
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        paddingHorizontal: calcWidth(16),
        alignItems: 'center',
    },
    input: {
        backgroundColor: colors.inputGrey,
        marginTop: calcHeight(24),
        marginHorizontal: calcWidth(16),
        borderRadius: calcWidth(8),
        paddingVertical: calcHeight(14),
        paddingHorizontal: calcWidth(12),
    },
    title: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(18),
        marginLeft: calcWidth(16),
        marginTop: calcHeight(8),
        color: colors.black
    },
    inputHeaderText: {
        marginHorizontal: calcWidth(16),
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        marginTop: calcHeight(12)
    },
    back: {
        padding: calcWidth(12),
    },
    submitButton: {
        width: calcWidth(343),
        alignSelf: 'center',
        marginTop: calcHeight(30),
        paddingVertical: calcHeight(16),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.mainColor,
        borderRadius: calcWidth(16)
    },
    submitText: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(18),
        fontWeight: '600',
        marginLeft: calcWidth(8),
        color: colors.white
    },
    errorText: {
        color: colors.delete,
        marginHorizontal: calcWidth(16),
        marginTop: calcHeight(4),
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12)
    },
    logo: {
        height: calcHeight(180),
        alignSelf: 'center',
    },
    loginText: {
        alignSelf: 'center',
        fontFamily: fonts.Medium,
        fontSize: calcWidth(16),
        color: colors.mainColor,
    },
    addServiceButton: {
        alignSelf: 'center',
        width: calcWidth(369),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(180)
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
    readText: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#4A5A51',
    },
    bold: {
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
    }
});

export default styles;
