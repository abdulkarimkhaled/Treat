import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? calcHeight(20) : calcHeight(60),
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
    categoryHeaderText: {
        fontSize: calcWidth(14),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        marginLeft: calcWidth(40),
        marginTop: calcHeight(20),
    },
    dropdown: {
        height: calcHeight(60),
        marginHorizontal: calcWidth(30),
        borderRadius: calcWidth(10),
        paddingHorizontal: 8,
        backgroundColor: colors.white,
        marginTop: calcHeight(8)
    },
    placeholderStyle: {
        fontSize: calcWidth(14),
        fontFamily: fonts.Regular,
        fontWeight: '400',
        color: '#777777',
    },
    selectedTextStyle: {
        fontSize: calcWidth(14),
        fontFamily: fonts.Regular,
        fontWeight: '400',
        color: '#777777',
    },
    dropdownContainer: {
        backgroundColor: colors.white,
        borderRadius: calcWidth(10)
    },
    addServiceButton: {
        alignSelf: 'center',
        width: calcWidth(369),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(60)
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
    periodTitle: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
        marginTop: calcHeight(20),
        marginLeft: calcWidth(45),
    },
    item: {
        padding: calcWidth(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: calcWidth(10),
        backgroundColor: '#F7F3F0',
        marginRight: calcWidth(10),
        padding: calcWidth(8),
        marginBottom: calcHeight(6)
    },
    textSelectedStyle: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#B2866B',
    },
    dateTitle: {
        fontSize: calcWidth(18),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222',
        alignSelf: 'center',
        marginTop: calcHeight(8)
    },
    dateText: {
        fontSize: calcWidth(14),
        fontFamily: fonts.BoldSans,
        fontWeight: '700',
        color: '#222222',
        marginTop: calcHeight(14),
        marginHorizontal: calcWidth(30)
    },
    list: {
        marginTop: calcHeight(12),
        alignSelf: 'center'
    },
    timeView: {
        width: calcWidth(85),
        backgroundColor: 'transparent',
        marginRight: calcWidth(10.4),
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: calcWidth(10),
        paddingVertical: calcHeight(8),
        borderWidth: 1,
        borderColor: '#AFAFAF',
    },
    timeSelected: {
        backgroundColor: "#B2866B",
        borderColor: '#B2866B',
    },
    timeText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: '#AFAFAF',
    },
    timeTextSelected: {
        color: '#FFFFFF',
    },
});

export default styles;
