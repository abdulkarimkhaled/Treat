import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
        paddingBottom: calcHeight(40)
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
    searchContainer: {
        width: calcWidth(370),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "space-between",
        marginTop: calcHeight(20)
    },
    inputContainer: {
        width: calcWidth(300),
        backgroundColor: colors.white,
        alignSelf: 'center',
        borderRadius: calcWidth(10),
        marginBottom: calcHeight(20),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: calcWidth(15),

    },
    input: {
        width: calcWidth(300),
        paddingVertical: Platform.OS === 'ios' ? calcHeight(20) : calcHeight(10),
        borderRadius: calcWidth(10),
        marginLeft: calcWidth(12),
        color: 'grey'
    },
    mapButton: {
        backgroundColor: '#4A5A51',
        borderRadius: calcWidth(15),
        width: calcWidth(60),
        height: calcWidth(60),
        justifyContent: "center",
        alignItems: 'center'
    },
    option: {
        marginRight: calcWidth(30)
    },
    selectedOption: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
    },
    notSelectedOption: {
        color: '#AFAFAF',
    },
    selectedLine: {
        backgroundColor: "#4A5A51",
        height: calcHeight(2),
        width: '100%',
        marginTop: calcHeight(6)
    },
    notSelectedLine: {
        backgroundColor: "transparent",
    },
    list: {
        marginHorizontal: calcWidth(30),
        marginBottom: calcHeight(20),
        flexGrow: 0,
        height: calcHeight(40)
    },
    spaList: {
    },
    image: {
        width: calcWidth(190),
        height: calcWidth(190),
    },
    emptyContainer: {
        alignItems: 'center',
        width: calcWidth(320),
        alignSelf: 'center',
        marginTop: calcHeight(30)
    },
    noResults: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(18),
        fontWeight: '600',
        color: '#222222',
        marginTop: calcHeight(20)
    },
    emptyText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#4A5A51',
        marginTop: calcHeight(10),
        textAlign: 'center'
    }
});

export default styles;
