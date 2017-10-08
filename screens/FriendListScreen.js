import React from 'react';
import FriendList from '../components/ItemList/FriendList'

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