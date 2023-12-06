import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapMarkerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    topContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: "#F6F6F6",
        paddingVertical: calcHeight(20),
        paddingTop: calcHeight(40),
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: calcWidth(24)
    },
    inputContainer: {
        width: calcWidth(332),
        backgroundColor: colors.white,
        alignSelf: 'center',
        borderRadius: calcWidth(10),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: calcWidth(15),
        marginLeft: calcWidth(20)
    },
    input: {
        width: calcWidth(300),
        paddingVertical: Platform.OS === 'ios' ? calcHeight(20) : calcHeight(10),
        borderRadius: calcWidth(10),
        marginLeft: calcWidth(12),
        color: 'grey'
    },
    lowerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    locateButton: {
        alignSelf: 'flex-end',
        marginRight: calcWidth(30),
        marginBottom: calcHeight(20)
    },
    confirmButton: {
        backgroundColor: '#B2866B',
        borderRadius: calcWidth(15),
        width: calcWidth(370),
        paddingVertical: calcHeight(19),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: calcHeight(40),
        alignSelf: 'center',
        marginTop: calcHeight(10)
    },
    confirmText: {
        fontFamily: fonts.BoldSans,
        fontSize: calcWidth(16),
        fontWeight: '700',
        color: colors.white,
    }
});

export default styles;
