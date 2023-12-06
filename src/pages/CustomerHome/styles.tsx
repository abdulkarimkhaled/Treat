import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    list: {
        marginHorizontal: calcWidth(30),
        marginTop: calcHeight(20)
    },
    spaList: {
        marginTop: calcHeight(20),
    },
    loader: {
        marginTop: calcHeight(200)
    },
    searchContainer: {
        width: calcWidth(370),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "space-between"
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
        height: calcWidth(60),

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
    mapButton: {
        backgroundColor: '#4A5A51',
        borderRadius: calcWidth(15),
        width: calcWidth(60),
        height: calcWidth(60),
        justifyContent: "center",
        alignItems: 'center'
    },
    slide: {
        alignSelf: "center",
        backgroundColor: "#D1D4D2",
        width: '100%',
        height: calcHeight(130),
        borderRadius: calcWidth(10)
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
    }
});

export default styles;
