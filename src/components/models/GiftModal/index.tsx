import React, { FunctionComponent, useState } from 'react';
import { Text, TouchableOpacity, FlatList, ScrollView, View, Image } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../../../navigation/NavigationService';
import { calcHeight, calcWidth } from '../../../config/metrics';
import { Gift, MinusBackGround, PlusBackGround } from '../../../icons/svgs';

type GiftModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
}

const GiftModal: FunctionComponent<GiftModalProps> = ({
  visible,
  setVisible,
  onPress
}) => {

  const [services, setServices] = useState([
    { name: 'ALL' },
    { name: 'HARI CUTS' },
    { name: 'BARBERSHOP' },
    { name: 'SPA' },
    { name: 'MESSAGE' },
    { name: 'TRIM' },
    { name: 'MIX CUT' },
    { name: 'BEARD CUT' },
  ])
  const [selectedSerive, setSelectedSerive] = useState(0)
  const [singleService, setSingleService] = useState([
    { selected: false, image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: 50, time: '45', details: "industry's standard dummy ever since the an unknown .." },
    { selected: false, image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: 50, time: '45', details: "industry's standard dummy ever since the an unknown .." },
    { selected: false, image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: 50, time: '45', details: "industry's standard dummy ever since the an unknown .." },
    { selected: false, image: 'https://picsum.photos/200/300', title: 'Lorem ipsum', price: 50, time: '45', details: "industry's standard dummy ever since the an unknown .." },
  ])
  const renderServices = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedSerive(index)}
        style={[styles.serviceContainer, selectedSerive == index && styles.selectedService]} >
        <Text style={[styles.service, selectedSerive == index && styles.selectedServiceText]} >{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const changeSelected = (index: number) => {
    let tempService = [...singleService]
    tempService[index].selected = !tempService[index].selected
    setSingleService(tempService)
  }

  const renderSingleService = ({ item, index }: any) => {
    return (
      <View
        style={styles.singleServiceContainer} >
        <Image style={styles.seriveImage} source={{ uri: item.image }} />
        <View style={{ width: calcWidth(160) }} >
          <Text style={styles.singleTitle} >{item.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <Text style={styles.price} >SR {item.price}</Text>
            <View style={styles.greyDot} />
            <Text style={styles.timeMin}>{item.time}min</Text>
          </View>
          <Text style={styles.details} >{item.details}</Text>
        </View>
        <TouchableOpacity
          onPress={() => changeSelected(index)}
          style={{}} >
          {item.selected ? <MinusBackGround /> : <PlusBackGround />}
        </TouchableOpacity>
        {item.discount ? <View style={styles.discountView} >
          <Text style={styles.discount}>{item.discount}</Text>
        </View> : null}
      </View>
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
      <View style={styles.container}>
        <FlatList
          data={services}
          style={styles.list}
          contentContainerStyle={{ paddingRight: calcWidth(40) }}
          renderItem={renderServices}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={singleService}
          renderItem={renderSingleService}
          style={{ width: calcWidth(370), height: calcHeight(400) }}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.bottomContainer} >
          <View>
            <Text style={styles.total} >
              Total <Text style={styles.totalServices} >
                ({singleService.filter(item => item.selected).length} Services)
              </Text>
            </Text>
            <Text style={styles.totalPrice} >
              SR {singleService.filter(item => item.selected).reduce((a, b) => a + (b['price'] || 0), 0)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => {
            setVisible(false)
            NavigationService.navigate('SendGift')
          }} >
            <LinearGradient angle={-266}
              style={styles.gradientBookNow} colors={['#607569', '#4A5A51']}>
              <Gift />
              <Text style={styles.bookNow} >SEND</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export { GiftModal };