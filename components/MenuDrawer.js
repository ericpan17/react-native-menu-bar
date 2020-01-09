import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text, mdName) {
		return(
			<TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(nav)}>
					<Ionicons
						name={mdName}
						color="#888"
						size={32}
					/>
					<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}
	navLink2(nav, text) {
		return(
			<TouchableOpacity style={{paddingLeft: 50, height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}
	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/ci-logo.jpg')} />
							</View>
							<View style={styles.profileText}>
								<Text style={styles.name}></Text>
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
						{this.navLink('Home', 'Home', 'md-home')}
						{this.navLink('CurrentProjects', 'Current Projects', 'md-list-box')}
						{this.navLink('AllProjects', 'All Active Projects', 'md-list')}
						{this.navLink('Contact', 'Contact Us', 'md-contact')}
						{this.navLink('Settings', 'Settings', 'md-settings')}
					</View>
				</ScrollView>
				<View style={styles.footer}>
				    <Ionicons
						name="md-arrow-dropright"
						style={{left: 15}}
						color="#888"
						size={32}
					/>
					<Text style={styles.description}>Provided by condoinvestors.ca</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 107,
		borderRadius: 20,
	},
	topLinks:{
		height: 160,
		backgroundColor: '#333',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	},
	item: {
		flex: 1,
		flexDirection: 'row',
		height: 80,
		left: 10
	},
	link: {
		// flex: 1,
		fontSize: 24,
		paddingLeft: 14,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		// flex: 1, 
		width: 50,
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 14,
	}
})