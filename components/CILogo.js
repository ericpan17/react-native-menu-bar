import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class CILogho extends React.Component {
	render() {
		return(
			<View style={styles.container}>
			     <Text style={styles.text}>{this.props.title ? this.props.title : "Condo Investors"}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 0,
		left: 70
	},
	text: {
		color: '#FFF',
		fontSize: 25
	}
})