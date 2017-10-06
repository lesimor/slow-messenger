import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ListItem } from 'react-native';

export default class ChatList extends React.Component {
    render() {
        const chat_list = [
            {
                imageUrl: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png',
                key: "채팅방1"
            },
            {
                imageUrl: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png',
                key: "채팅방2"
            }
        ];

        return (
            <FlatList
                data={chat_list}
                renderItem={this._renderItem}
            />
        );
    }

    _renderItem = ({item}) => {
        return(
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: item.imageUrl}} style={styles.photo} />
                    <Text style={styles.text}>
                        {item.key}
                    </Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
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
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});