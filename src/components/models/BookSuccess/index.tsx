import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, I18nManager } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { colors } from '../../../config/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { LocationPin } from '../../../icons/svgs';
import NavigationService from '../../../navigation/NavigationService';
import LottieView from "lottie-react-native";
import { calcWidth } from '../../../config/metrics';

type BookSuccessModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
}

const BookSuccessModal: FunctionComponent<BookSuccessModalProps> = ({
  visible,
  setVisible,
  onPress
}) => {

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
      onModalHide={() => {
        NavigationService.reset('CustomerTabs', { index: 1 })
      }}>
      <View
        style={styles.container}>
        <LottieView style={{ width: calcWidth(228), height: calcWidth(228) }} source={require("../../../icons/lottie/SuccessBooking.json")} autoPlay loop />
        <Text style={styles.titleText} >
          You booked services successfully
        </Text>
        <View style={styles.bookingContainer} >
          <View style={styles.bookingHeader}>
            <Text style={styles.booking} >Booking details</Text>
          </View>
          <View style={styles.secondBookingHeader} >
            <Text style={styles.services} >Services</Text>
            <Text style={styles.start}>Start Time</Text>
            <Text style={styles.total} >Total</Text>
          </View>
          <View style={styles.thirdBookingHeader}>
            <Text style={styles.serviceInfo} >Massage</Text>
            <Text style={styles.dateDetails}>{'9:30PM\n10/12/2023'}</Text>
            <Text style={styles.totalPrice}>50,00 sar</Text>
          </View>
        </View>
        <View style={styles.buttons} >
          <TouchableOpacity onPress={() => {
            setVisible(false)
          }} style={styles.shareButton} >
            <LinearGradient angle={-259} style={styles.gradient} colors={['#4A5A51', '#607569']} >
              <Text style={styles.shareText} >
                Back to home
              </Text>
            </LinearGradient>

          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export { BookSuccessModal };