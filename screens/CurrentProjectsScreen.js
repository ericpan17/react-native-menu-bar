import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MenuButton from '../components/MenuButton'
import ProjectList from '../components/ProjectList'
import CommonDrawer from '../components/CommonDrawer'
import Footer from '../components/Footer'
import styles from '../styles/styles'
import { getCurrentProjectList } from '../lib/'

export default class CurrentProjectsScreen extends React.Component {
  render() {
    const { navigation, screenProps } = this.props

    return (
      <View style={styles.container}>
        <CommonDrawer style={styles.header} navigation={navigation} />
        <ProjectList style={styles.content} navigation={navigation} showNumber={true} title="Current Projects" dataSource={ getCurrentProjectList(screenProps.dataSource) } />
        <Footer navigation={navigation} style={styles.footer} />
      </View>
    );
  }
}
