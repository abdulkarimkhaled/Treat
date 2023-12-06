import { StyleSheet } from 'react-native';
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
    miniHeader: {
        flexDirection: 'row',
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(20),
        justifyContent: "flex-end"
    },
    showAll: {
        fontSize: calcWidth(14),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51'
    },
    markAll: {
        fontSize: calcWidth(14),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51'
    },
    list: {
        marginTop: calcHeight(20),
    },
    newContainer: {
        backgroundColor: 'white',
        borderRadius: calcWidth(10),
        padding: calcWidth(10),
        marginHorizontal: calcWidth(30),
        marginBottom: calcHeight(14),
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationImage: {
        width: calcWidth(64),
        height: calcWidth(64),
        borderRadius: calcWidth(32),
    },
    imageContainer: {
        width: calcWidth(64),
        height: calcWidth(64),
        borderRadius: calcWidth(32),
        backgroundColor: '#EBEBEB',
    },
    title: {
        marginLeft: calcWidth(20),
        width: calcWidth(190),
        fontSize: calcWidth(14),
        fontFamily: fonts.Regular,
        fontWeight: '400',
        color: '#4A5A51',
    },
    time: {
        fontSize: calcWidth(12),
        fontFamily: fonts.Regular,
        fontWeight: '400',
        color: '#AFAFAF',
        marginBottom: calcHeight(10)
    },
    notRead: {
        backgroundColor: '#B2866B',
        width: calcWidth(6),
        height: calcWidth(6),
        borderRadius: calcWidth(3)
    },
    read: {
        backgroundColor: '#EBEBEB',
        width: calcWidth(6),
        height: calcWidth(6),
        borderRadius: calcWidth(3)
    },
    thirdPartion: {
        alignItems: 'flex-end',
        marginLeft: calcWidth(10)
    },
    listHeader: {
        fontSize: calcWidth(14),
        fontFamily: fonts.BoldSans,
        fontWeight: '700',
        color: '#222222',
        marginHorizontal: calcWidth(30),
        marginBottom: calcHeight(12)
    },
});

export default styles;
