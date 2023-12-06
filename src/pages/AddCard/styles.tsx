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
        marginTop: calcHeight(34),
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
    cardsContainer: {
        marginTop: calcHeight(26),
        marginHorizontal: calcWidth(30),
        backgroundColor: '#fff',
        borderRadius: calcWidth(10),
        paddingHorizontal: calcWidth(16),
        paddingVertical: calcHeight(14)
    },
    title: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '600',
        color: '#050505',
    },
    titleCard: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '400',
        color: '#050505',
        marginTop: calcHeight(14)
    },
    number: {
        backgroundColor: '#F9F9F9',
        borderRadius: calcWidth(10),
        width: '100%',
        paddingVertical: calcHeight(12),
        paddingHorizontal: calcWidth(10),
        marginTop: calcHeight(6)
    },
    lowerInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        backgroundColor: '#F9F9F9',
        borderRadius: calcWidth(10),
        width: calcWidth(182),
        paddingVertical: calcHeight(12),
        paddingHorizontal: calcWidth(10),
        marginTop: calcHeight(6)
    },
    cvv: {
        backgroundColor: '#F9F9F9',
        borderRadius: calcWidth(10),
        width: calcWidth(139),
        paddingVertical: calcHeight(12),
        paddingHorizontal: calcWidth(10),
        marginTop: calcHeight(6)
    },
    cardImage: {
        marginRight: calcWidth(18.4),
        width: calcWidth(70.75),
        height: calcHeight(34),
        borderWidth: calcWidth(2),
        borderRadius: calcWidth(5),
        borderColor: '#1E3B4B',
    },
    selectedImage: {
        borderColor: 'transparent'
    },
    saveCard: {
        marginTop: calcHeight(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    saveCardNotSelected: {
        width: calcWidth(16),
        height: calcWidth(16),
        borderRadius: calcWidth(5),
        borderWidth: calcWidth(1),
        borderColor: '#E1E1E1',
    },
    saveCardSelected: {
        borderColor: '#5EAF82',
        backgroundColor: '#5EAF82',
    },
    saveCardText: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#2B2D2C',
        marginLeft: calcWidth(8)
    }
});

export default styles;
