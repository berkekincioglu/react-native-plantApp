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
import {useNavigation} from '@react-navigation/native';
const plantData = [
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

const friendData = [
  {
    id: 0,
    img: images.profile1,
  },
  {
    id: 1,
    img: images.profile2,
  },
  {
    id: 2,
    img: images.profile3,
  },
  {
    id: 3,
    img: images.profile4,
  },
  {
    id: 4,
    img: images.profile5,
  },
];

const Home = () => {
  const [newPlants, setNewPlants] = useState(plantData);
  const [friendList, newFriendList] = useState(friendData);

  const navigation = useNavigation();

  const renderFriendsComponent = () => {
    if (friendList.length === 0) {
      return <View></View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => (
        <View
          key={index.toString()}
          style={index === 0 ? {} : {marginLeft: -20}}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={index.toString()}
                  style={index === 0 ? {} : {marginLeft: -20}}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>
            +{friendList.length - 3} More
          </Text>
        </View>
      );
    }
  };

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
      <View
        style={{
          height: '50%',
          backgroundColor: COLORS.lightGray,
          marginBottom: SIZES.base,
        }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
            padding: SIZES.padding,
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
                onPress={() => navigation.navigate('PlantDetail')}
                style={{flex: 1}}>
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('PlantDetail')}
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
                onPress={() => navigation.navigate('PlantDetail')}
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
      <View
        style={{
          height: '20%',
          backgroundColor: COLORS.lightGray,
        }}>
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
              {friendList?.length} Total
            </Text>
            <View style={{flexDirection: 'row', height: '60%'}}>
              <View
                style={{
                  flex: 1.3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {renderFriendsComponent()}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  Add new
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.gray,
                  }}
                  onPress={() => console.log('Add friend clicked')}>
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
