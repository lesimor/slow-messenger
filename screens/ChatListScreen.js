import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchTextInput} from '../components/GenericTextInput'
import { ChatList } from '../components/ItemList'

export default class ChatListScreen extends React.Component {
  static navigationOptions = {
    title: '채팅',
  };

  render() {
    return (
     <View style={styles.container}>
        <SearchTextInput/>
        <ChatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
