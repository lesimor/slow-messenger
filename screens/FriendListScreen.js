import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';
import FriendList from '../components/ItemList/FriendList'
import { SearchTextInput } from '../components/TextInput'

export default class FriendListScreen extends React.Component {
  static navigationOptions = {
    title: "친구"
  };

  render() {
      return (
          <FriendList />
      );
  }
}