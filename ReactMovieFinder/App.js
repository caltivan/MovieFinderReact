    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow strict-local
     */

    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import HomeScreen from './HomeScreen.js';
    import MovieDetailScreen from './MovieDetailScreen.js';

    import type {Node} from 'react';
    import {
      SafeAreaView,
      StatusBar,
      StyleSheet,
      Text,
      Button,
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
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
    });

    const Stack = createNativeStackNavigator();


    const MyStack = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };



    const App: () => Node = () => {
      return (
        <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'title' }}
              />
              <Stack.Screen name="Profile" component={MovieDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

      );
    };


    export default App;
