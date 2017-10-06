import React, {Component} from 'react'
import {TextInput, StyleSheet, View} from 'react-native'

export default class SearchTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.search}
                    onChangeText={(text) => this.setState({text})}
                    placeholder= {"친구 채팅방 검색"}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fbfbfb',
    },
    search: {
        height: 30,
        borderColor: '#f1efef',
        backgroundColor: '#f1efef',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center'
    }
});