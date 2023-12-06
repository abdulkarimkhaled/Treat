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

type GiftSuccessModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
}

const GiftSuccessModal: FunctionComponent<GiftSuccessModalProps> = ({
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
        NavigationService.reset('CustomerTabs', { index: 0 })
      }}>
      <View
        style={styles.container}>
        <LottieView style={{ width: calcWidth(228), height: calcWidth(228) }} source={require("../../../icons/lottie/GiftSucces.json")} autoPlay loop />
        <Text style={styles.titleText} >
          You booked gift successfully
        </Text>
        <Text style={styles.to} >
          To <Text style={styles.name} >
            Ahmed Abdelaziz
          </Text>
        </Text>
        <View style={styles.buttons} >
          <TouchableOpacity onPress={() => {
            setVisible(false)
          }} style={styles.homeButton} >
            <Text style={styles.homeText} >
              Back to home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
          }} style={styles.shareButton} >
            <LinearGradient angle={-259} style={styles.gradient} colors={['#4A5A51', '#607569']} >
              <Text style={styles.shareText} >
                Share gift
              </Text>
            </LinearGradient>

          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export { GiftSuccessModal };