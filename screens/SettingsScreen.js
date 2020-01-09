import React from 'react';
import { Text, View } from 'react-native';

import CommonDrawer from '../components/CommonDrawer'
import Footer from '../components/Footer';
import styles from '../styles/styles'
export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CommonDrawer style={styles.header} navigation={this.props.navigation} />
        <View style={styles.content}>
            <Text style={styles.text}>Settings</Text>
        </View>
        <Footer navigation={this.props.navigation} style={styles.footer} />
      </View>
    );
  }
}
