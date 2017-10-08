import React from 'react';
import { View, Text } from 'react-native'

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: '채팅방',
    };

    render() {
        return(
            <View>
                <Text> {"hello world!"} </Text>
            </View>
        )
    }
}