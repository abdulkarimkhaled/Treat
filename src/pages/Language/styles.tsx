import { Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    header: {
        paddingHorizontal: calcWidth(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: calcHeight(20)
    },
    headerText: {
        fontSize: calcWidth(21),
        fontFamily: fonts.SemiBoldSans,
        fontWeight: '600',
        color: '#222222'
    },
    notSelectedContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: calcWidth(30),
        padding: calcWidth(10),
        borderRadius: calcWidth(10),
        alignItems: 'center',
        marginTop: calcHeight(10),
        borderWidth: 1,
        borderColor: 'transparent'
    },
    selected: {
        borderColor: '#5EAF82'
    },
    langText: {
        fontSize: calcWidth(16),
        fontFamily: fonts.Medium,
        fontWeight: '500',
        color: '#050505',
        marginLeft: calcWidth(10)
    }
});

export default styles;
