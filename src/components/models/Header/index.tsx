//header component incase of multiple calls 
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { styles } from './styles';
import LogoText from '../../../icons/svgs/LogoText';
import Bell from '../../../icons/svgs/Bell';
import Pin from '../../../icons/svgs/Pin';
import Filter from '../../../icons/svgs/Filter';

type HeaderProps = {
  title?: string,
  bellBool?: boolean
  line?: boolean
  pinBool?: boolean
  filterBool?: boolean
  onPressFilter?: Function
  onPressPin?: Function
  notificationCount?: number
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  bellBool,
  line,
  pinBool,
  filterBool,
  onPressFilter,
  onPressPin,
  notificationCount
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.smallerContainer} >
        <LogoText />
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          width: '24%', justifyContent: "space-between"
        }} >
          {!pinBool ?
            <View /> :
            <TouchableOpacity onPress={() => {
              if (onPressPin) {
                onPressPin()
              }
            }}>
              <Pin />
            </TouchableOpacity>}
          {!filterBool ?
            <View /> :
            <TouchableOpacity onPress={() => {
              if (onPressFilter) {
                onPressFilter()
              }
            }} >
              <Filter />
            </TouchableOpacity>}
          {!bellBool ?
            <View /> :
            <TouchableOpacity onPress={() => NavigationService.navigate('Notifications')} >
              {notificationCount && notificationCount > 0 ?
                <View style={styles.notificationsContainer} >
                  <Text style={styles.count} >
                    {notificationCount}
                  </Text>
                </View> : null}
              <Bell />
            </TouchableOpacity>}
        </View>

      </View>
      {line ? null : <View style={styles.line} />}
    </View>
  )
}

export { Header };
