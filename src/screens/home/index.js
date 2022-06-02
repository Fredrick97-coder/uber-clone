import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import NavOptions from '../../components/navOptions';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Home = () => {
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
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        // minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
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
