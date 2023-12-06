import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    list: {
        paddingBottom: calcHeight(90),
        marginHorizontal: calcWidth(16),
        marginTop: calcHeight(24)
    },
    loader: {
        marginTop: calcHeight(200)
    },
    inputContainer: {
        width: calcWidth(370),
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
    buttonsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: calcHeight(20)
    },
    locationButton: {
        borderRadius: calcWidth(10),
        borderWidth: 1,
        borderColor: '#A4ADA8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(11),
        paddingHorizontal: calcWidth(20),
        marginRight: calcWidth(10)
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
    servicesContainer: {
        flexDirection: 'row',
        marginBottom: calcHeight(10),
    },
    serviceName: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(14),
        fontWeight: '500',
        color: '#495B51',
        // textTransform: 'capitalize'
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
        marginLeft: calcWidth(10),
        width: calcWidth(50),
        height: calcWidth(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButton: {
        borderColor: '#4A5A51',
        borderRadius: calcWidth(10),
        borderWidth: 1,
        marginLeft: calcWidth(10),
        width: calcWidth(50),
        height: calcWidth(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addServiceButton: {
        position: 'absolute',
        bottom: calcHeight(40),
        alignSelf: 'center',
        width: calcWidth(369),
        borderRadius: calcWidth(15)
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
});

export default styles;
