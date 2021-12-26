import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS, SIZES, icons, FONTS, images} from '../constants';

const RequirementDetail = ({icon, label, detail}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{tintColor: COLORS.secondary, width: 30, height: 30}}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.body3,
          }}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2}}>
          {detail}
        </Text>
      </View>
    </View>
  );
};

export default RequirementDetail;

const styles = StyleSheet.create({});
