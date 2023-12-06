import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import style from './style';
import {calcHeight, calcWidth} from '../../../config/metrics';

export default class CalendarDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDayIndex: 0,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    const {firstDate, selectedDate, selectedDateKey} = this.props;

    const first = firstDate ? moment(firstDate) : moment(new Date());
    const selected = selectedDate ? moment(selectedDate) : first;

    const selectedDayIndex = moment.duration(selected.diff(first)).asDays();

    if (selectedDateKey) {
      this.setState({selectedDayIndex: selectedDateKey}, () => {
        setTimeout(() => {
          this.setScrollOffset(selectedDateKey);
        }, 100);
      });
    } else {
      this.setState(
        {
          selectedDayIndex,
        },
        () => {
          setTimeout(() => {
            this.setScrollOffset(this.state.selectedDayIndex);
          }, 100);
        },
      );
    }
  }

  setScrollOffset = index => {
    const {showArrows} = this.props;
    if (this.scrollView) {
      const {width, daysInView} = this.props;

      let scrollViewWidth = calcWidth(61);
      if (width || daysInView) {
        scrollViewWidth = width || daysInView * calcWidth(61);
      }
      const xOffset =
        calcWidth(61) * index +
        (calcWidth(61) - scrollViewWidth) / 2 +
        (scrollViewWidth % calcWidth(61)) / 2;

      const scrollOffset = {x: xOffset, animated: true};

      this.scrollView.scrollTo(scrollOffset);
    }
  };

  scroll = direction => {
    if (this.scrollView) {
      const {scrollPosition} = this.state;
      let newPosition = 0;
      if (direction === 'left') {
        newPosition = Math.max(scrollPosition - calcWidth(61), 0);
      } else {
        newPosition = scrollPosition + calcWidth(61);
      }

      this.setState({
        scrollPosition: newPosition,
      });

      this.scrollView.scrollTo({x: newPosition, animated: true});
    }
  };

  dateSelect = props => {
    const {onDateSelect} = this.props;
    this.setState(
      {selectedDayIndex: props.key},
      this.setScrollOffset(props.key),
    );

    if (typeof onDateSelect === 'function') {
      onDateSelect(props.date, props.key);
    }
  };

  generateDates = props => {
    const date = moment(props.firstDate);
    const disabledDates = props.disabledDates ? props.disabledDates : [];

    const first = props.firstDate
      ? moment(props.firstDate)
      : moment(new Date());
    const last = props.lastDate ? moment(props.lastDate) : null;

    const numberOfDays = last
      ? moment.duration(last.diff(first)).asDays() + 1
      : props.numberOfDays;

    const dates = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const isDisabled = !!disabledDates.includes(date.format('YYYY-MM-DD'));

      dates.push({
        date: date.format('YYYY-MM-DD'),
        day: date.format('D'),
        day_of_week: date.format('ddd'),
        month: date.format('MMMM'),
        disabled: isDisabled,
      });
      date.add(1, 'days');
    }
    return dates;
  };

  render() {
    let days;
    const {selectedDayIndex} = this.state;
    const {
      firstDate,
      lastDate,
      numberOfDays,
      disabledText,
      daysInView,
      disabledDates,
      width,
      paginate,
      showArrows,
      leftArrow,
      rightArrow,
    } = this.props;

    let scrollWidth = null;
    if (width) {
      scrollWidth = width;
    } else if (daysInView) {
      scrollWidth = daysInView * calcWidth(61);
    }

    const daysProps = {
      firstDate,
      lastDate,
      numberOfDays: numberOfDays || 30,
      disabledText: disabledText || null,
      disabledDates: disabledDates || null,
    };

    const availableDates = this.generateDates(daysProps);
    if (availableDates) {
      days = availableDates.map((val, key) => {
        const selectedStyle = selectedDayIndex === key ? true : false;
        return (
          <TouchableOpacity
            key={key}
            onPress={() =>
              this.dateSelect({key, date: availableDates[key].date})
            }
            style={[
              style.dateContainer,
              selectedStyle ? {backgroundColor: '#B2866B'} : null,
            ]}>
            <Text
              style={[
                style.monthText,
                selectedStyle ? {color: '#FFFFFF'} : null,
              ]}>
              {val.day_of_week}
            </Text>
            <Text
              style={[
                style.dayText,
                selectedStyle ? {color: '#FFFFFF'} : null,
              ]}>
              {val.day}
            </Text>
          </TouchableOpacity>
        );
      });
    }

    return (
      <View
        style={{
          width: scrollWidth,
          flexDirection: 'row',
          marginTop: calcHeight(26),
          alignSelf: 'center',
        }}>
        <ScrollView
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
          contentContainerStyle={{paddingRight: calcWidth(18)}}
          scrollEnabled={!showArrows}
          horizontal
          snapToInterval={
            paginate && scrollWidth % calcWidth(61) === 0
              ? scrollWidth
              : calcWidth(61)
          }
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}>
          <View style={{width: (scrollWidth % calcWidth(61)) / 2}} />
          {days || null}
        </ScrollView>
      </View>
    );
  }
}
