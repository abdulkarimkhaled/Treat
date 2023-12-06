import React, { FunctionComponent, ReactElement } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Star from '../../../icons/svgs/Star';
import MapPin from '../../../icons/svgs/MapPin';
import { calcHeight, calcWidth } from '../../../config/metrics';
import Heart from '../../../icons/svgs/Heart';
import FilledHeart from '../../../icons/svgs/FilledHeart';

type Item = {
  image: string
  title: string
  floatingColor: string
  floatingText: string
  location: string
  rating: string
  rates: string
  distance?: string
  distanceType?: string
  fav?: boolean
  onPress?: (() => void)
}
const SpaItem: FunctionComponent<Item> = ({
  image,
  title,
  floatingColor,
  floatingText,
  location,
  rating,
  rates,
  distance,
  distanceType,
  fav,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={() => { if (onPress) onPress() }}
      style={styles.conatiner} >
      <View>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }} />
        {floatingText ? <View style={[styles.floating, { backgroundColor: floatingColor }]} >
          <Text style={styles.floatingText} >{floatingText}</Text>
        </View> : null}
      </View>
      <View style={styles.middleView} >
        <Text numberOfLines={1} style={styles.location} >{location}</Text>
        <Text numberOfLines={1} style={styles.title} >{title}</Text>
        <View style={styles.ratingContainer} >
          <Star />
          <Text style={styles.rating} >{rating}</Text>
          <Text style={styles.rates}>({rates})</Text>
          {distance ? <View style={{ flexDirection: 'row' }} >
            <MapPin width={calcWidth(10.4)} height={calcHeight(13)} />
            <Text style={styles.distance}>{distance}</Text>
            <Text style={styles.distance}>{distanceType}</Text>
          </View> : null}

        </View>
      </View>
      <TouchableOpacity>
        {fav ? <FilledHeart /> : <Heart />}
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

export { SpaItem };