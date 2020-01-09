import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const FooterNavigator = createBottomTabNavigator({
	Home: HomeScreen,
	Settings: SettingsScreen
})

export default createAppContainer(FooterNavigator);