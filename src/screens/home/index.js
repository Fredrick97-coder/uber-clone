import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import NavOptions from '../../components/navOptions';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../../slices/navSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
      </View>
      <GooglePlacesAutocomplete
        placeholder="Where From?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        fetchDetails={true}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              destination: data.description,
            })
          );

          dispatch(setDestination(null));
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
            borderWidth: 0.3,
            borderColor: 'rgba(0,0,0,0.3)',
            marginHorizontal: 10,
          },
        }}
      />
      <NavOptions />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {},
});
