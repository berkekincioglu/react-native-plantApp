import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {COLORS, SIZES, icons, FONTS, images} from '../constants';
import RenderNewPlants from '../components/RenderNewPlants';
const data = [
  {
    id: 0,
    name: 'Plant 1',
    img: images.plant1,
    favorite: false,
  },
  {
    id: 1,
    name: 'Plant 2',
    img: images.plant2,
    favorite: true,
  },
  {
    id: 2,
    name: 'Plant 3',
    img: images.plant3,
    favorite: false,
  },
  {
    id: 3,
    name: 'Plant 4',
    img: images.plant4,
    favorite: false,
  },
];

const Home = () => {
  const [newPlants, setNewPlants] = useState(data);

  return (
    <View style={styles.container}>
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
              <TouchableOpacity
                onPress={() => console.log('focus on password')}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: SIZES.base}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => (
                  <RenderNewPlants index={index} item={item} />
                )}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                Today's Share
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log('See all pressed');
                }}>
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: '88%',
              marginTop: SIZES.base,
            }}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => console.log('Plant pressed')}
                style={{flex: 1}}>
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('Plant pressed')}
                style={{flex: 1, marginTop: SIZES.font}}>
                <Image
                  source={images.plant6}
                  resizeMode="cover"
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1.3}}>
              <TouchableOpacity
                onPress={() => console.log('Plant pressed')}
                style={{flex: 1, marginLeft: SIZES.font}}>
                <Image
                  source={images.plant7}
                  resizeMode="cover"
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
          <View
            style={{
              marginTop: SIZES.radius,
              marginHorizontal: SIZES.padding,
            }}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Added Friend
            </Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              5 Total
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
});
