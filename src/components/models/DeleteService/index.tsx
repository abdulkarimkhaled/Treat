import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, I18nManager } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { colors } from '../../../config/appStyles';
import LinearGradient from 'react-native-linear-gradient';


type DeleteServiceProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress?: Function
  title?: string
}

const DeleteService: FunctionComponent<DeleteServiceProps> = ({
  visible,
  setVisible,
  onPress,
  title
}) => {

  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      statusBarTranslucent={true}
      style={{ alignItems: "center" }}
      backdropColor={"rgba(0,0,0,1)"}
      backdropOpacity={0.6}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      onBackdropPress={() => {
        setVisible(false)
      }}
    >
      <View
        style={styles.container}>
        <Text style={styles.deleteText} >
          You want to delete?
        </Text>
        <Text style={styles.serviceText} >
          {title}
        </Text>
        <View style={styles.buttons} >
          <TouchableOpacity onPress={() => {
            if (onPress) {
              setVisible(false)
              onPress()
            }
          }} style={styles.yesButton} >
            <LinearGradient angle={-259} style={styles.gradient} colors={['#4A5A51', '#607569']} >
              <Text style={styles.yesText} >
                Yes
              </Text>
            </LinearGradient>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setVisible(false)
          }} style={styles.noButton}>
            <Text style={styles.noText} >
              No
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export { DeleteService };