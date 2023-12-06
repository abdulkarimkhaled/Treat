import {Platform, StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from '../../../config/metrics';
import {fonts} from '../../../config/appStyles';

export default StyleSheet.create({
  singleContainer: {
    padding: 10,
    shadowOpacity: Platform.OS === 'web' ? 0 : 0.18,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 6,
    paddingVertical: calcHeight(9),
  },
  singleDateBox: {
    borderRadius: calcWidth(10),
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 100,
    width: 100,
    flexDirection: 'column',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 6,
    zIndex: 3,
  },
  singleContainerSelected: {
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // shadowOffset: {
    //   height: 2,
    //   width: 2,
    // },
    // elevation: 6,
  },
  closed: {
    color: 'red',
  },
  monthContainerClosed: {
    backgroundColor: 'red',
  },
  monthContainer: {
    height: 25,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    fontFamily: fonts.SemiBoldSans,
    fontSize: calcWidth(12),
    fontWeight: '600',
    color: '#222222',
    marginBottom: calcHeight(4),
  },
  dateContainer: {
    paddingVertical: calcHeight(16),
    backgroundColor: '#EBEBEB',
    borderRadius: calcWidth(100),
    // paddingHorizontal: calcWidth(13),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: calcWidth(10),
    width: calcWidth(50),
  },
  dateText: {
    marginTop: Platform.OS === 'ios' ? 4 : 0,
    fontSize: 38,
    textAlign: 'center',
  },
  dayText: {
    fontFamily: fonts.BoldSans,
    fontSize: calcWidth(18),
    color: '#222222',
    fontWeight: '700',
  },
  arrow: {
    height: calcWidth(61),
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
