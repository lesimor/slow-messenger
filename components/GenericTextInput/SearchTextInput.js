import React, {Component} from 'react'
import {TextInput, StyleSheet} from 'react-native'

export default class SearchTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <TextInput
                style={styles.search}
                onChangeText={(text) => this.setState({text})}
                placeholder= {"친구 채팅방 검색"}
            />
        );
    }
}

const styles = StyleSheet.create({
    search: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})