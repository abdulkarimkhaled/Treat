import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, I18nManager } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { colors } from '../../../config/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { LocationPin } from '../../../icons/svgs';
import NavigationService from '../../../navigation/NavigationService';


type LocationModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
}

const LocationModal: FunctionComponent<LocationModalProps> = ({
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
      onBackdropPress={() => {
        setVisible(false)
      }}

    >
      <View
        style={styles.container}>
        <LocationPin />
        <Text style={styles.titleText} >
          Share your location
        </Text>
        <Text style={styles.subTitleText} >
          if we have your location, we can do a better job to find what you want.
        </Text>
        <View style={styles.buttons} >
          <TouchableOpacity onPress={() => {
            setVisible(false)
            NavigationService.navigate('MapScreen')
          }} style={styles.shareButton} >
            <LinearGradient angle={-259} style={styles.gradient} colors={['#4A5A51', '#607569']} >
              <Text style={styles.shareText} >
                SHARE LOCTION
              </Text>
            </LinearGradient>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setVisible(false)
            NavigationService.navigate('MapScreen')
          }} >
            <Text style={styles.manualText} >
              Choose your location manually
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  )
}

export { LocationModal };