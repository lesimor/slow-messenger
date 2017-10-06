import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import FriendsList from '../components/ItemList/FriendsList'
import { SearchTextInput } from '../components/GenericTextInput'

export default class FriendListScreen extends React.Component {
  static navigationOptions = {
    title: "친구"
  };


  render() {
      return (
          <ScrollView style={styles.container}>
            <SearchTextInput />
            <FriendsList />
          </ScrollView>
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
