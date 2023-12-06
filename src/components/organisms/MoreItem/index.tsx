import React, { FunctionComponent, ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Item = {
  title?: string
  icon?: ReactElement<any, any>
  onPress?: Function
}
const MoreItem: FunctionComponent<Item> = ({
  title,
  icon,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={() => { if (onPress) onPress() }} style={styles.conatiner} >
      <View style={styles.icon}>
        {icon}
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

export { MoreItem };