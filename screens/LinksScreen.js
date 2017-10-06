import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchTextInput} from '../components/GenericTextInput'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: '채팅',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchTextInput/>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
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
