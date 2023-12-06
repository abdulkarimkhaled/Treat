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
        marginTop: calcHeight(30)
    },
    dropdown: {
        height: Platform.OS === 'ios' ? calcHeight(60) : calcHeight(45),
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
    buttonsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: calcHeight(20)
    },
    locationButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#A4ADA8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(11),
        paddingHorizontal: calcWidth(20),
        marginRight: calcWidth(10),
        backgroundColor: '#F6F6F6'
    },
    locationText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#A4ADA8',
    },
    homeButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#A4ADA8',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(11),
        paddingHorizontal: calcWidth(20)
    },
    homeText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: '#A4ADA8',
    },
    genderButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#A4ADA8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(11),
        marginRight: calcWidth(10),
        width: calcWidth(100)
    },
    selectedGenderButton: {
        backgroundColor: '#5B6F63'
    },
    genderText: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(12),
        fontWeight: '600',
        color: '#777777',
    },
    selectedGenderText: {
        color: 'white',
    },
    input: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        backgroundColor: 'white',
        width: calcWidth(180),
        paddingVertical: Platform.OS === 'ios' ? calcHeight(20) : calcHeight(10),
        marginTop: calcHeight(5),
        borderRadius: calcWidth(10),
        paddingHorizontal: calcWidth(15),
        color: 'grey'
    },
    fullInput: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        backgroundColor: 'white',
        width: calcWidth(370),
        paddingVertical: Platform.OS === 'ios' ? calcHeight(20) : calcHeight(10),
        marginTop: calcHeight(5),
        borderRadius: calcWidth(10),
        paddingHorizontal: calcWidth(15),
        color: 'grey'
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
    }
});

export default styles;
