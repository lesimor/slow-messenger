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
        height: 30,
        borderColor: '#f1efef',
        backgroundColor: '#f1efef',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    }
});