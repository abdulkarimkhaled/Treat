import { StyleSheet } from 'react-native';
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
    newBookingButton: {
        alignSelf: 'center',
        paddingVertical: calcHeight(16),
        backgroundColor: '#4A5A51',
        width: calcWidth(300),
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: calcWidth(10),
        marginBottom: calcHeight(20)
    },
    newBookingText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(14),
        fontWeight: '700',
        color: 'white',
    }
});

export default styles;
