import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, icons, FONTS, images} from '../constants';

const RenderNewPlants = ({index, item}) => {
  return (
    <View
      key={index}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.base,
      }}>
      <Image
        source={item.img}
        resizeMode="cover"
        style={{width: SIZES.width * 0.23, height: '82%', borderRadius: 15}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: '12%',
          right: 0,

          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log('Favorite on pressed')}
        style={{position: 'absolute', top: '15%', left: 7}}>
        <Image
          source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RenderNewPlants;

const styles = StyleSheet.create({});
