import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'
import ProjectList from '../components/ProjectList';
import CommonDrawer from '../components/CommonDrawer'
import Footer from '../components/Footer';
import styles from '../styles/styles'
import { getAllActiveProjectList } from '../lib'

export default class AllProjectsScreen extends React.Component {
  render() {
    const { navigation, screenProps } = this.props
    return (
      <View style={styles.container}>
        <CommonDrawer style={styles.header} navigation={navigation} />
        <ProjectList style={styles.content} navigation={navigation} title="All Active Projects" dataSource={getAllActiveProjectList(screenProps.dataSource, screenProps.tags)} />
        <Footer navigation={navigation} style={styles.footer} />
      </View>
    );
  }
}