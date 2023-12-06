import React, { FunctionComponent, ReactElement } from 'react';
import { KeyboardTypeOptions, StyleProp, Text, TextInput, View, ViewStyle } from 'react-native';
import { styles } from './styles';
import KSA from '../../../icons/svgs/KSA';
import { calcWidth } from '../../../config/metrics';
import KSARect from '../../../icons/svgs/KSARect';

type Item = {
  title?: string
  icon?: ReactElement<any, any>
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  multi?: boolean,
  enabled?: boolean,
  type?: string,
  keyboardType?: KeyboardTypeOptions
}
const ProfileInput: FunctionComponent<Item> = ({
  title,
  icon,
  placeholder,
  value,
  onChange,
  style,
  multi,
  enabled,
  type,
  keyboardType,
  containerStyle
}) => {
  return (
    <View style={[styles.conatiner]} >
      <Text style={styles.title} >{title}</Text>
      <View style={[styles.inputContainer, style]} >
        {type == 'phone' ? <View  >
          <KSARect />
        </View> : null}
        {type == 'phone' ? <View style={{
          width: calcWidth(1),
          height: '80%',
          backgroundColor: '#0505051A',
        }} /> : null}
        <TextInput
          style={[styles.input, type == 'phone' && { width: calcWidth(230) }, containerStyle]}
          value={value}
          multiline={multi}
          placeholder={placeholder}
          onChangeText={(text) => { if (onChange) onChange(text) }}
          editable={enabled}
          keyboardType={keyboardType}
          placeholderTextColor={'grey'}
        />
        {icon ? <View style={styles.iconContainer} >
          {icon}
        </View> : null}
      </View>
    </View>
  )
};

export { ProfileInput };