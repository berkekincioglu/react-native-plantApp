import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import RequirementBar from '../components/RequirementBar';
import RequirementDetail from '../components/RequirementDetail';
import {COLORS, SIZES, icons, FONTS, images} from '../constants';
useNavigation;
const PlantDetail = () => {
  const navigation = useNavigation();
  const renderRequirements = () => {
    return (
      <View
        style={{
          flex: 2.5,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-evenly',
        }}>
        <RequirementDetail icon={icons.sun} label="Sunlight" detail="15°C" />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ml Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail icon={icons.garden} label="Sunlight" detail="3 Kg" />
        <RequirementDetail icon={icons.seed} label="Sunlight" detail="150 mg" />
      </View>
    );
  };
  const renderRequirementsBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
        <RequirementBar icon={icons.drop} barPercentage="25%" />
        <RequirementBar icon={icons.temperature} barPercentage="80%" />
        <RequirementBar icon={icons.garden} barPercentage="30%" />
        <RequirementBar icon={icons.seed} barPercentage="50%" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height: '35%'}}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            color: COLORS.secondary,
            ...FONTS.h1,
          }}>
          {' '}
          Requirements
        </Text>
        {renderRequirementsBar()}
        {renderRequirements()}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: SIZES.padding,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={icons.back}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({
  container: {flex: 1},
});
