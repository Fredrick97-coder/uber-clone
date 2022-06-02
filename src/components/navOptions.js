import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={tw`p-5 pb-10 `}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View
              style={tw`flex justify-center items-center rounded-2 bg-gray-200 p-5 shadow-md`}
            >
              <Image
                style={{
                  height: 120,
                  width: 120,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={tw`text-lg text-black font-medium pt-5`}>
                {item.title}
              </Text>
              <Icon
                style={tw`p-2 bg-black rounded-full`}
                type="antdesign"
                name="arrowright"
                color="white"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
