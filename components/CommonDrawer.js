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
import MenuButton from './MenuButton'
import CILogo from './CILogo';

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class CommonDrawer extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>
				    <MenuButton navigation={this.props.navigation} />
					<CILogo title={this.props.title} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		top: 0,
		backgroundColor: '#333',
		height: 80
	},
	header: {
		top: 40,
	}
})