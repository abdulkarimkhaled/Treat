import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    servicesContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: calcWidth(370),
        justifyContent: 'space-between'
    },
    serviceName: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#495B51',
    },
    weekTitle: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#222222',
        marginLeft: calcWidth(30),
        marginBottom: calcHeight(22),
        marginTop: calcHeight(33)
    },
    serviceType: {
        fontFamily: fonts.MediumSans,
        fontSize: calcWidth(9),
        fontWeight: '500',
        color: '#777777',
    },
    editButton: {
        borderColor: '#4A5A51',
        borderRadius: calcWidth(10),
        borderWidth: 1,
        width: calcWidth(50),
        height: calcWidth(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    serviceTextContainer: {
        backgroundColor: 'white',
        borderRadius: calcWidth(10),
        paddingHorizontal: calcWidth(15),
        paddingVertical: calcHeight(8),
        width: calcWidth(305),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    weekView: {
        width: calcWidth(44),
        height: calcHeight(70.4),
        backgroundColor: '#EBEBEB',
        marginRight: calcWidth(10.4),
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: calcWidth(100)
    },
    weekSelected: {
        backgroundColor: "#B2866B"
    },
    weekList: {
        width: calcWidth(370),
        alignSelf: 'center',
        flexGrow: 0
    },
    periodsList: {
        alignSelf: 'center',
        flexGrow: 0
    },
    weekText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: '#222222',
    },
    weekTextSelected: {
        color: '#FFFFFF',
    },
    selectedDayContainer: {
        width: calcWidth(370),
        marginTop: calcHeight(32),
        backgroundColor: '#B2866B',
        borderRadius: calcWidth(10),
        alignSelf: 'center',
        paddingVertical: calcHeight(12),
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: calcHeight(34)
    },
    selectedDayText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: colors.white,
    },
    periodTitle: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(14),
        fontWeight: '600',
        color: '#4A5A51',
        marginLeft: calcWidth(45)
    },
    fromToContainer: {
        flexDirection: 'row',
        marginHorizontal: calcWidth(30),
        alignItems: 'center',
        marginTop: calcHeight(6),
        marginBottom: calcHeight(12)
    },
    fromText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12),
        fontWeight: '400',
        color: '#9E9E9E',
        marginRight: calcWidth(10)
    },
    toText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12),
        fontWeight: '400',
        color: '#9E9E9E',
        marginRight: calcWidth(10)
    },
    fromButton: {
        backgroundColor: 'white',
        width: calcWidth(90),
        borderRadius: calcWidth(10),
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: calcHeight(14.3),
        marginRight: calcWidth(10)
    },
    toButton: {
        backgroundColor: 'white',
        width: calcWidth(90),
        borderRadius: calcWidth(10),
        alignItems: 'center',
        justifyContent: "center",
        marginRight: calcWidth(10),
        paddingVertical: calcHeight(14.3)
    },
    deleteButton: {
        borderColor: '#A4ADA8',
        borderRadius: calcWidth(10),
        borderWidth: 1,
        marginLeft: calcWidth(10),
        width: calcWidth(50),
        height: calcWidth(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropdown: {
        marginTop: calcHeight(10),
        backgroundColor: 'white',
        borderRadius: calcWidth(10),
        padding: calcWidth(8),
        paddingBottom: 0,
        width: calcWidth(370),
        marginBottom: calcHeight(16),
        alignSelf: 'center'
    },
    placeholderStyle: {
        fontSize: calcWidth(14),
        paddingBottom: calcWidth(8)
    },
    selectedTextStyle: {
        fontSize: calcWidth(12),
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
    rotate: {
        transform: [{ rotate: '90deg' }]
    },
    addnewTimeText: {
        fontSize: calcWidth(16),
        fontFamily: fonts.Medium,
        fontWeight: '500',
        color: '#4A5A51',
        marginTop: calcHeight(10),
        marginHorizontal: calcWidth(30),
        textAlign: 'right'
    },
    addServiceButton: {
        alignSelf: 'center',
        width: calcWidth(369),
        borderRadius: calcWidth(15),
        marginTop: calcHeight(16)
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
    }
});

export default styles;
