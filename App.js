import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator'
import FooterNavigator from './navigation/FooterNavigator';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      dataSource: null,
      tags: null
    }
  }
  async componentDidMount(){
    let response = await fetch('http://wordpress.erglobal.ca/wp-json/wp/v2/pages?orderby=title&order=asc&per_page=100')
    let dataSource = await response.json()
    response = await fetch('http://wordpress.erglobal.ca/wp-json/wp/v2/tags')
    let tags = await response.json()
    this.setState({dataSource, tags})
    return;
  }

   render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator screenProps={{dataSource: this.state.dataSource, tags: this.state.tags}} />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
