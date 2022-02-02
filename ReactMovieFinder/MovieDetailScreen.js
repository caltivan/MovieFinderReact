import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  poster: {
   width: '100%',
   height: '50%',
 },
});
//<Text>This is {route.params.name}'s profile</Text>;

const MovieDetailScreen = ({ navigation, route }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Image style={styles.poster} source={{uri:'https://image.tmdb.org/t/p/original' + route.params.poster_path}}/>
      <Text>{route.params.overview}</Text>
    </SafeAreaView>

  );
};


export default MovieDetailScreen;
