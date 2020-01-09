import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../styles/styles'
import { cleanTitle, cleanContent } from '../lib/'


export default class ProjectList extends React.Component {
  renderHeader = () => {
    return <View>
      <Text style={{fontSize: 20, padding: 20, fontWeight: "bold"}}>{this.props.title}</Text>
    </View>
  }
  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.props.dataSource}
          renderItem={({ item, index }) =>
            <TouchableOpacity style={{ height: 45 }} onPress={() => this.props.navigation.navigate("ProjectDetail", { title: cleanTitle(item.title.rendered), html: cleanContent(item.content.rendered) })}>
              <Text style={localStyles.link}>{ (this.props.showNumber ? (index + 1) + ' - ' : ' ') + cleanTitle(item.title.rendered)}</Text>
            </TouchableOpacity>}
          keyExtractor={({ id }, index) => 'id-' + id}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  link: {
    flex: 1,
    fontSize: 14,
    padding: 2,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    borderBottomWidth: 1,
    width: "90%",
    borderBottomColor: '#999'
  }
})