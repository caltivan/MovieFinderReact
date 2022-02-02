import React, {Component} from 'react';
import MainMovieList from './MainMovieList.js';
import type {Node} from 'react';

import {
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  columns: {
    margin: 16,
    justifyContent: 'space-evenly',
  },
});

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      count: 0,

    };
  }

  async getMovies() {
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        this.setState({ data: json.movies });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

  componentDidMount() {
      this.getMovies();
    }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  getListViewItem = (item) => {
        //Alert.alert(item.title);
        //navigation.navigate('Profile', { name: item.title })
        const { navigate } = this.props.navigation;

        navigate('Profile', { name: item.title })
    }

 render() {
   const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
         <FlatList
           columnWrapperStyle={styles.columns}
           numColumns={2}
           data={data}
           keyExtractor={({ id }, index) => id}
           renderItem={({ item }) => (
             <Text style={styles.item}
             onPress={this.getListViewItem.bind(this, item)}>{item.title}, {item.releaseYear}</Text>

           )}
         />
       )}
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
      </View>
    )
  }
}


const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainMovieList />
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }/>

    </SafeAreaView>

  );
};

export default Test;
