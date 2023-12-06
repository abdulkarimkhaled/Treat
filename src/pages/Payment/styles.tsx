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
    one: {
        backgroundColor: '#B2866B',
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: calcWidth(10)
    },
    oneText: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    review: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#050505',
    },
    two: {
        backgroundColor: '#AFAFAF',
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: calcWidth(10)
    },
    paymentContainer: {
        backgroundColor: '#fff',
        borderRadius: calcWidth(15),
        paddingVertical: calcHeight(10),
        width: calcWidth(370),
        alignSelf: 'center',
        marginTop: calcHeight(26)
    },
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: calcWidth(30),
        marginBottom: calcHeight(10)
    },
    payment: {
        fontSize: calcWidth(16),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#4A5A51',
    },
    firstBall2: {
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        left: calcWidth(-15),
        top: calcWidth(-15)
    },
    secondBall2: {
        width: calcWidth(30),
        height: calcWidth(30),
        borderRadius: calcWidth(15),
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        right: calcWidth(-15),
        top: calcWidth(-15)
    },
    paymentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: calcWidth(30),
        marginBottom: calcHeight(10)
    },
    firstSection: {
        fontSize: calcWidth(14),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#050505',
    },
    secondSection: {
        fontSize: calcWidth(16),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#4A5A51',
        // width: calcWidth(70)
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: calcHeight(14),
        paddingHorizontal: calcWidth(30),
    },
    secondSectionTotal: {
        fontSize: calcWidth(16),
        fontFamily: fonts.RegularSans,
        fontWeight: '400',
        color: '#B2866B',
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
    title: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(18),
        fontWeight: '500',
        color: '#050505',
        marginLeft: calcWidth(30),
        marginBottom: calcHeight(10),
        marginTop: calcHeight(20)
    },
    subTitle: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#A4ADA8',
        marginLeft: calcWidth(30),
        marginBottom: calcHeight(10),
    },
    paymentTitle: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '600',
        color: '#050505',
        marginLeft: calcWidth(30),
    },
    cardsList: {
        alignSelf: 'center',
        borderRadius: calcWidth(15),
        backgroundColor: '#fff',
        paddingHorizontal: calcWidth(7),
        paddingVertical: calcHeight(10),
        width: calcWidth(370),
        marginTop: calcHeight(10)
    },
    card: {
        flexDirection: 'row',
        paddingLeft: calcWidth(10),
        borderRadius: calcWidth(10),
        paddingVertical: calcHeight(6),
        alignItems: 'center'
    },
    selectedCard: {
        backgroundColor: '#F8F8F8'
    },
    selected: {
        width: calcWidth(16),
        height: calcWidth(16),
        borderRadius: calcWidth(8),
        borderWidth: calcWidth(4),
        borderColor: '#4A5A51',
        backgroundColor: '#fff',
        marginRight: calcWidth(6)
    },
    Notselected: {
        width: calcWidth(16),
        height: calcWidth(16),
        borderRadius: calcWidth(8),
        borderWidth: calcWidth(1),
        borderColor: '#B2B2B2',
        backgroundColor: '#fff',
        marginRight: calcWidth(6)
    },
    cardTitle: {
        fontFamily: fonts.RegularSans,
        fontSize: calcWidth(14),
        fontWeight: '400',
        color: '#050505',
        marginLeft: calcWidth(8),
        width: calcWidth(220)
    },
    cvvInput: {
        color: 'black',
        paddingVertical: 0,
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        width: calcWidth(50),
        borderRadius: calcWidth(5),
        borderColor: '#4A5A51',
        borderWidth: calcWidth(1),
        alignItems: 'center',
        justifyContent: 'center',
        height: calcHeight(28)
    },
    addCard: {
        fontFamily: fonts.SemiBoldSans,
        fontSize: calcWidth(16),
        fontWeight: '600',
        color: '#B2866B',
    }
});

export default styles;
