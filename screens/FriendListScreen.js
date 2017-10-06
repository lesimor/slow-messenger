import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';
import FriendList from '../components/ItemList/FriendList'
import { SearchTextInput } from '../components/GenericTextInput'

export default class FriendListScreen extends React.Component {
  static navigationOptions = {
    title: "친구"
  };

  render() {
      return (
          <ScrollView style={styles.container}>
            <FriendList />
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
