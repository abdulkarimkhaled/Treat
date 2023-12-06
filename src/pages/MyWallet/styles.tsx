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
        width: calcWidth(369),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(60),
        position: 'absolute',
        bottom: calcHeight(70)
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
    pointsView: {
        width: calcWidth(370),
        alignSelf: 'center',
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(20),
        alignItems: 'center',
        marginTop: calcHeight(20)
    },
    yourPoints: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(18),
        fontWeight: '400',
        color: '#FFFFFF99',
    },
    points: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(32),
        fontWeight: '700',
        color: colors.white,
    },
    updated: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#FFFFFF80',
    },
    pointsIcon: {
        position: 'absolute',
        top: calcWidth(20),
        right: calcWidth(20)
    },
    historyTitle: {
        marginTop: calcHeight(20),
        marginHorizontal: calcWidth(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    historyText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#222222',
    },
    resultsText: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#222222',
    },
    list: {
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(10),
        flexGrow: 0,
        height: calcHeight(350)

    },
    listContainer: {
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: calcHeight(10)
    },
    pointsHistoryItem: {
        backgroundColor: colors.white,
        borderRadius: calcWidth(15),
        padding: calcWidth(15),
        marginBottom: calcHeight(10)
    },
    date: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(12),
        fontWeight: '400',
        color: '#AFAFAF',
    },
    orderNumber: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#A4ADA8',
    },
    amount: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
    },
    pointsAdded: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#B2866B',
    }
});

export default styles;
