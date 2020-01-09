import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../styles/styles'
import { WIDTH } from '../lib'

const iconSize = 32

export default class Footer extends React.Component {
	constructor() {
		super()
		this.defaultState = {
			colorsHome:  '#222',
			colorsCurrentProjects: '#222',
			colorSettings: '#222'
		}
		this.state = {
			colorsHome:  '#888',
			colorsCurrentProjects: '#888',
			colorsSettings: '#888'
		}
	}
	onPress(nav) {
		let newColors = { ...this.defaultState }
		newColors['colors' + nav] = '#FF0000';
		
		this.setState({colorsHome: newColors.colorsHome})
		this.setState({colorsCurrentProjects: newColors.colorsCurrentProjects})
		this.setState({colorsSettings: newColors.colorsSettings})
		
		//this.setState(newColors)
		this.props.navigation.navigate(nav)
	}
	render() {

		return(
			<View style={styles.footer}>
				<View style={localStyles.homeIcon}>
					<Ionicons
						name="md-home"
						color={this.state.colorsHome}
						size={iconSize}
						onPress={() => this.onPress('Home')}
					/>
				</View>
				<View style={localStyles.projectsIcon}>
					<Ionicons
						name="md-list-box"
						color={this.state.colorsCurrentProjects}
						size={iconSize}
						onPress={() => this.onPress('CurrentProjects')}
					/>
				</View>
				<View style={localStyles.settingsIcon}>
					<Ionicons
						name="md-contact"
						color={this.state.colorsSettings}
						size={iconSize}
						onPress={() => this.onPress('Contact')}
					/>
				</View>
			</View>
		)
	}
}
const left = 10
// x+x+3*iconSize+2space = WIDTH 
//X A  Y  B  Y  C  X//
const space = (WIDTH - 2 * left -  3 * iconSize) / 2
const localStyles = StyleSheet.create({
	homeIcon: {
		left: left + iconSize,
		width: space
	},
	projectsIcon: {
		left: left + iconSize, // left + space + iconSize,
		width: space
	},
	settingsIcon: {
		left: left + iconSize,
		width: space
	}
})