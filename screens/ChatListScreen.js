import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ChatList } from '../components/ItemList'

export default class ChatListScreen extends React.Component {
  static navigationOptions = {
    title: '채팅',
  };

  render() {
    return (
      <ChatList />
    );
  }
}
