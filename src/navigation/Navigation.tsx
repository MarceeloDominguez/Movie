import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParams = {
  Tabs: undefined;
  DetailsScreen: {id: number};
  SearchScreen: Movie[];
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {...styles.tabBarStyle},
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;
            case 'FavoritesScreen':
              iconName = 'heart-outline';
              break;
            case 'ProfileScreen':
              iconName = 'person';
              break;
          }
          return (
            <View style={styles.containerIcon}>
              <Icon name={iconName} color={color} size={25} />
              <View
                style={[
                  {
                    height: focused ? 6 : 0,
                    backgroundColor: focused ? 'red' : '',
                  },
                  styles.point,
                ]}
              />
            </View>
          );
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: '#1f1f1f'},
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: '#1f1f1f'},
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    elevation: 0,
    backgroundColor: '#1f1f1f',
    borderTopWidth: 0,
  },
  containerIcon: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  point: {
    width: 6,
    position: 'absolute',
    bottom: 4,
    borderRadius: 3,
  },
});
