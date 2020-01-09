import React from 'react';
import { Text, View } from 'react-native';

export default class ProjecTitle extends React.Component {
    render() {
        return (
            <View style={{top: 0, left: 20}}>
               <Text>aaa{the.props.title}</Text>
           </View>
        )
    }
}