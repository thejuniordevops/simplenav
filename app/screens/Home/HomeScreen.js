import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>This is Home Screen</Text>
            </View>
        )
    }
}

export default HomeScreen; 