import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors, Dim } from "../styles/styles";
import HomeTab from "./tabs/home";

const Drawer = createDrawerNavigator();

export default function CustomDrawer() {
	return (
		<Drawer.Navigator
			useLegacyImplementation={true}
			initialRouteName="main"
			// drawerContent={(props) => <DrawerContent navigation={props.navigation} />}
			drawerStyle={{ backgroundColor: Colors.bg }}
			drawerType={"slide"}
			// edgeWidth={50}
			screenOptions={{
				headerShown: false,
			}}>
			{/* feeds */}
			<Drawer.Screen name="main" component={HomeTab} />
		</Drawer.Navigator>
	);
}
