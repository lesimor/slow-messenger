import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from '../../screens/ChatScreen';


export default class ChatRow extends React.Component {
    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Chat')}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: this.props.imageUrl}} style={styles.photo} />
                    <Text style={styles.text}>
                        {this.props.chatName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
});