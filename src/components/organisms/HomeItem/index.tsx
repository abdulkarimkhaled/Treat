import React, { FunctionComponent, ReactElement } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Item = {
  id?: number
  title?: string
  icon?: ReactElement<any, any>
  color?: string
}
const HomeItem: FunctionComponent<Item> = ({
  id,
  title,
  icon,
  color,
}) => {
  return (
    <View style={styles.conatiner} >
      <View style={[styles.iconContainer, { backgroundColor: color }]} >
        {icon}
      </View>
      <View style={styles.textContainer} >
        <Text style={styles.id}>
          {id}
        </Text>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  )
};

export { HomeItem };