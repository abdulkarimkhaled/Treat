import React, { FunctionComponent, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../../navigation/NavigationService';
import moment from 'moment';
import CalendarDays from '../../organisms/CalendarDays';
import { calcHeight, calcWidth } from '../../../config/metrics';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from '@miblanchard/react-native-slider';

type FilterModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
}

const FilterModal: FunctionComponent<FilterModalProps> = ({
  visible,
  setVisible,
  onPress
}) => {
  const [value, setValue] = useState([0, 100])

  const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDateKey, setSelectedDateKey] = useState(0)
  const changeSelectedDate = async (date: any, key: any) => {
    setSelectedDate(date)
    setSelectedDateKey(key)
  };
  const [time, setTime] = useState([
    { title: '9.00 AM' },
    { title: '9.30 AM' },
    { title: '9.45 AM' },
    { title: '10.00 AM' },
  ])
  const [selectedTime, setSelectedTime] = useState(0)
  const [services, setServices] = useState([
    { title: 'Hair Cut' },
    { title: 'Hair Cut' },
    { title: 'Hair Cut' },
    { title: 'Hair Cut' },
    { title: 'Hair Cut' },
    { title: 'Hair Cut' },
  ])
  const [selectedService, setSelectedService] = useState(0)

  const [gender, setGender] = useState([
    { title: 'All' },
    { title: 'Female' },
    { title: 'Male' },
    { title: 'Couple' },
  ])
  const [selectedGender, setSelectedGender] = useState(0)

  const renderTime = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTime(index)}
        style={[styles.timeContainer, selectedTime == index && styles.selectedTime]} >
        <Text style={[styles.time, selectedTime == index && styles.selectedTimeText]} >{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const renderService = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedService(index)}
        style={[styles.serviceContainer, selectedService == index && styles.selectedService]} >
        <Text style={[styles.service, selectedService == index && styles.selectedServiceText]} >{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const renderGender = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedGender(index)}
        style={[styles.serviceContainer, selectedGender == index && styles.selectedService]} >
        <Text style={[styles.service, selectedGender == index && styles.selectedServiceText]} >{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      statusBarTranslucent={true}
      backdropColor={"#495B5180"}
      style={{
        justifyContent: 'flex-end',
        margin: 0
      }}
      backdropOpacity={1}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      onBackdropPress={() => {
        setVisible(false)
      }}

    >
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: calcHeight(60)
        }}
        style={styles.container}>
        <View style={styles.header} >
          <TouchableOpacity onPress={() => setVisible(false)} >
            <Text style={styles.cancel} >
              Cancel
            </Text>
          </TouchableOpacity>
          <Text style={styles.filter} >
            Filter
          </Text>
          <TouchableOpacity>
            <Text style={styles.reset} >
              Reset
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.available} >
          Available on
        </Text>

        <Text style={styles.dateTitle}>
          {moment(selectedDate).format('MMMM YYYY')}
        </Text>

        <CalendarDays
          firstDate={
            new Date().getHours() > 21 ?
              new Date(currentMonth).setDate(new Date(currentMonth).getDate() + 1)
              : new Date(currentMonth)
          }
          numberOfDays={35}
          disabledText={'closed'}
          width={calcWidth(375)}
          daysInView={6}
          selectedDateKey={selectedDateKey}
          onDateSelect={(date: any, key: any) => {
            changeSelectedDate(date, key)
          }}
        />

        <Text style={styles.available} >
          Time
        </Text>

        <FlatList
          data={time}
          style={styles.list}
          renderItem={renderTime}
          numColumns={4}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />

        <Text style={styles.available} >
          Services
        </Text>


        <FlatList
          data={services}
          style={styles.list}
          renderItem={renderService}
          scrollEnabled={false}
          numColumns={3}
        />

        <Text style={styles.available} >
          Service for
        </Text>


        <FlatList
          data={gender}
          style={styles.list}
          renderItem={renderGender}
          horizontal
          scrollEnabled={false}
        />

        <Text style={styles.available} >
          Distance
        </Text>

        <Slider
          minimumValue={0}
          maximumValue={100}
          value={value}
          containerStyle={styles.sliderContainer}
          onValueChange={value => setValue(value)}
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.tracker}
          minimumTrackTintColor={'#B2866B'}

        />

        <View style={styles.valueContainer} >
          <View style={styles.minValueCont} >
            <Text style={styles.value}>
              {parseInt(value[0])} KM
            </Text>
          </View>
          <Text style={styles.dash}>-</Text>
          <View style={styles.minValueCont}  >
            <Text style={styles.value}>
              {parseInt(value[1])} KM
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          setVisible(false)
          NavigationService.navigate('MapScreen')
        }} style={styles.shareButton} >
          <LinearGradient angle={-259} style={styles.gradient} colors={['#4A5A51', '#607569']} >
            <Text style={styles.shareText} >
              SHOW RESULT
            </Text>
          </LinearGradient>

        </TouchableOpacity>
      </ScrollView>
    </Modal>
  )
}

export { FilterModal };