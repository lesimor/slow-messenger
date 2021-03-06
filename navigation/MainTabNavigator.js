import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import FriendListScreen from '../screens/FriendListScreen';
import ChatListScreen from '../screens/ChatListScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: FriendListScreen,
    },
    Links: {
      screen: ChatListScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios'
              ? `ios-chatbubbles${focused ? '' : '-outline'}`
              : 'md-chatbubbles';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-settings${focused ? '' : '-outline'}`
              : 'md-settings';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
