import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

import LinksScreen from '../screens/LinksScreen';
import CurrentProjectsScreen from '../screens/CurrentProjectsScreen';
import AllProjectsScreen from '../screens/AllProjectsScreen';
import ProjectDetailScreen from '../screens/ProjectDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactScreen from '../screens/ContactScreen'
import MenuDrawer from '../components/MenuDrawer';
import {WIDTH} from '../lib/';

const DrawerConfig = {
	drawerWidth: WIDTH*0.80,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		CurrentProjects: {
			screen: CurrentProjectsScreen
		},
		AllProjects: {
			screen: AllProjectsScreen
		},
		ProjectDetail: {
			screen: ProjectDetailScreen
		},
		Contact: {
			screen: ContactScreen
		},
		Settings: {
			screen: SettingsScreen
		}
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);