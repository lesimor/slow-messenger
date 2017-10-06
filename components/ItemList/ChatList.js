import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SearchTextInput } from '../TextInput'

export default class ChatList extends React.Component {
    render() {
        const chat_list = [
            {
                imageUrl: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png',
                name: "채팅방1",
                key: "채팅방1"
            },
            {
                imageUrl: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png',
                name: "채팅방2",
                key: "채팅방2"
            }
        ];

        return (
            <FlatList
                data={chat_list}
                renderItem={this._renderItem}
                ListHeaderComponent={this._renderListHeader}
            />
        );
    }

    _renderListHeader = () => {
        return(
            <SearchTextInput/>
        )
    };

    _renderItem = ({item}) => {
        return(
            <ChatRow
                imageUrl={item.imageUrl}
                chatName={item.name}
            />
        )
    }

}

const ChatRow = ({imageUrl, chatName}) => {
    return(
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: imageUrl}} style={styles.photo} />
                <Text style={styles.text}>
                    {chatName}
                </Text>
            </View>
        </View>
    )
};

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