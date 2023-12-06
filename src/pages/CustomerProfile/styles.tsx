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
    profileImageSvg: {
        alignSelf: 'center',
        marginTop: calcHeight(30)
    },
    galleryText: {
        fontSize: calcWidth(14),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        marginLeft: calcWidth(40),
        marginTop: calcHeight(20)
    },
    extra: {
        backgroundColor: '#D1D4D2',
        width: calcWidth(88.75),
        height: calcWidth(88.75),
        borderRadius: calcWidth(15),
        marginRight: calcWidth(5)
    },
    fakeList: {
        alignSelf: 'center',
        width: calcWidth(370),
        marginTop: calcHeight(9)
    },
    cameraButton: {
        backgroundColor: '#FFFFFFCC',
        width: calcWidth(40),
        height: calcWidth(40),
        borderRadius: calcWidth(20),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center'
    },
    about: {
        height: calcHeight(100)
    },
    workingHoursText: {
        fontSize: calcWidth(14),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
        marginLeft: calcWidth(40),
        marginTop: calcHeight(20)
    },
    dateTimeContainer: {
        flexDirection: 'row',
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(10),
        justifyContent: 'space-between'
    },
    dateButton: {
        width: calcWidth(370),
        borderRadius: calcWidth(15),
        backgroundColor: '#FFFFFF',
        padding: calcWidth(5),
        paddingLeft: calcWidth(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateText: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#AFAFAF',
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: calcHeight(40),
        marginHorizontal: calcWidth(30)
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
    fakeButton: {
        backgroundColor: 'transparent',
        width: calcWidth(370),
        height: calcHeight(53),
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        zIndex: 1
    },
    iconContainer: {
        width: calcWidth(50),
        height: calcWidth(50),
        borderRadius: calcWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
    },
    dropdown: {
        marginHorizontal: calcWidth(30),
        borderRadius: calcWidth(15),
        paddingHorizontal: calcWidth(12),
        paddingRight: calcWidth(5),
        paddingVertical: calcWidth(12),
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
    item: {
        padding: calcWidth(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default styles;
