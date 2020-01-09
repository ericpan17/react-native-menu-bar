import React from 'react';
import { Text, View } from 'react-native';

import CommonDrawer from '../components/CommonDrawer'
import styles from '../styles/styles'
import Footer from '../components/Footer';
import { getPromotion } from '../lib'
import { WebView } from 'react-native-webview';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation, screenProps } = this.props
    return (
      <View style={styles.container}>
        <CommonDrawer style={styles.header} navigation={this.props.navigation} />
        <WebView
          style={styles.details}
          originWhitelist={['*']}
          source={{ html: getPromotion(screenProps.dataSource, screenProps.tags) }}
        />
        <Footer navigation={this.props.navigation} style={styles.footer} />
      </View>
    );
  }
}
