import React, { FunctionComponent, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import CalendarDays from '../../organisms/CalendarDays';
import { calcHeight, calcWidth } from '../../../config/metrics';
import { Time } from '../../../icons/svgs';
import DownIcon from '../../../icons/svgs/DownIcon';
import { ProfileInput } from '../../organisms/ProfileInput';

type AddServiceModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
}

const AddServiceModal: FunctionComponent<AddServiceModalProps> = ({
  visible,
  setVisible,
  onPress
}) => {

  const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
  const [extraSelectedDate, setExtraSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [extraCurrentMonth, setExtraCurrentMonth] = useState(new Date())
  const [persons, setPersons] = useState(0)
  const [selectedDateKey, setSelectedDateKey] = useState(0)
  const [extraSelectedDateKey, setExtraSelectedDateKey] = useState(0)
  const changeSelectedDate = async (date: any, key: any) => {
    setSelectedDate(date)
    setSelectedDateKey(key)
  };
  const changeExtraSelectedDate = async (date: any, key: any) => {
    setExtraSelectedDate(date)
    setExtraSelectedDateKey(key)
  };
  const [time, setTime] = useState([
    { title: '9.00 AM' },
    { title: '9.30 AM' },
    { title: '9.45 AM' },
    { title: '10.00 AM' },
  ])
  const [selectedTime, setSelectedTime] = useState(0)
  const [extraSelectedTime, setExtraSelectedTime] = useState(0)
  const [about, setAbout] = useState('')
  const renderTime = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedTime(index)}
        style={[styles.timeContainer, selectedTime == index && styles.selectedTime]} >
        <Text style={[styles.time, selectedTime == index && styles.selectedTimeText]} >{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const renderTime2 = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setExtraSelectedTime(index)}
        style={[styles.timeContainer, extraSelectedTime == index && styles.selectedTime]} >
        <Text style={[styles.time, extraSelectedTime == index && styles.selectedTimeText]} >{item.title}</Text>
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
        margin: 0,
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
      <View style={{
        maxHeight: '85%', overflow: 'hidden', borderTopLeftRadius: calcWidth(30),
        borderTopRightRadius: calcWidth(30),
      }} >
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: calcHeight(40)
          }}
          style={styles.container}>
          <View style={{
            overflow: 'hidden',
            width: '100%',
            height: calcHeight(290),
          }}>
            <Image borderTopLeftRadius={calcWidth(30)} borderTopRightRadius={calcWidth(30)} style={styles.headerPic} source={{ uri: 'https://picsum.photos/200/300' }} />
          </View>
          <View style={styles.titleContainer}>
            <View style={{}}>
              <Text style={styles.title} >Lorem Ipsum</Text>
              <View style={{ flexDirection: 'row' }} >
                <Time color={'#DBDBDB'} />
                <Text style={styles.serviceTime} >
                  45min service
                </Text>
              </View>
            </View>
            <Text style={styles.servicePrice} >
              SR 50
            </Text>
          </View>
          <View style={{
            flexDirection: 'row', width: calcWidth(370),
            alignSelf: 'center',
            marginTop: calcHeight(20),
            alignItems: 'center',
            justifyContent: 'space-between'
          }} >
            <Text style={styles.about} >About Service</Text>
            <DownIcon color={'#B2866B'} />
          </View>

          <Text style={styles.aboutDetails} >is simply dummy text the printing and typesetting industry lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer.</Text>
          <View style={styles.sep} />

          <View style={{
            flexDirection: 'row',
            paddingHorizontal: calcWidth(30),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: calcHeight(20)
          }} >
            <Text>
              Person/s
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <TouchableOpacity onPress={() => {
                if (persons != 0) {
                  setPersons(persons - 1)
                }
              }} style={styles.addButton} >
                <Text style={styles.add} >-</Text>
              </TouchableOpacity>
              <Text style={styles.personsAmount} >{persons}</Text>
              <TouchableOpacity onPress={() => setPersons(persons + 1)} style={styles.addButton}>
                <Text style={styles.add}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.available} >
            Date
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
            style={[styles.list, { paddingHorizontal: calcWidth(30) }]}
            renderItem={renderTime}
            numColumns={4}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
          {persons > 0 ? <Text style={styles.available} >
            Extra Person/s
          </Text> : null}
          {persons > 0 ?
            <View style={styles.extraPortion} >
              <Text style={styles.available} >
                Date
              </Text>

              <Text style={styles.dateTitle}>
                {moment(extraSelectedDate).format('MMMM YYYY')}
              </Text>

              <CalendarDays
                firstDate={
                  new Date().getHours() > 21 ?
                    new Date(extraCurrentMonth).setDate(new Date(extraCurrentMonth).getDate() + 1)
                    : new Date(extraCurrentMonth)
                }
                numberOfDays={35}
                disabledText={'closed'}
                width={calcWidth(375)}
                daysInView={6}
                selectedDateKey={extraSelectedDateKey}
                onDateSelect={(date: any, key: any) => {
                  changeExtraSelectedDate(date, key)
                }}
              />

              <Text style={styles.available} >
                Time
              </Text>

              <FlatList
                data={time}
                style={styles.list}
                renderItem={renderTime2}
                numColumns={4}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
              />
            </View> : null}

          <ProfileInput
            value={about}
            onChange={setAbout}
            title='Note'
            style={styles.aboutText}
            containerStyle={{ width: 370 }}
            multi
            placeholder='Type your note here'
          />

          <View style={styles.bottomContainer} >
            <View>
              <Text style={styles.total} >
                Total <Text style={styles.totalServices} >
                  (1 Services)
                </Text>
              </Text>
              <Text style={styles.totalPrice} >
                SR 50
              </Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)} >
              <LinearGradient angle={-266}
                style={styles.gradientBookNow} colors={['#607569', '#4A5A51']}>
                <Text style={styles.bookNow} >ADD</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  )
}

export { AddServiceModal };