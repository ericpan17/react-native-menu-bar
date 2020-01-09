import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WebView } from 'react-native-webview';
import CommonDrawer from '../components/CommonDrawer'
import Footer from '../components/Footer'
import styles from '../styles/styles'
import ProjectTitle from '../components/ProjectTitle'

export default class ProjectDetailScreen extends React.Component {
  render() {
    let title = this.props.navigation.getParam('title', '')
    let html = this.props.navigation.getParam('html', '')
    return ( 
      <View style={styles.container}>
        <CommonDrawer style={styles.header} navigation={this.props.navigation} title={title} />
        <WebView
            style={styles.details}
            originWhitelist={['*']}
            source={{html:html}}
        />
        <Footer navigation={this.props.navigation} style={styles.footer} />
      </View>
    );
  }
}
