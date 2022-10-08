import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Pages/home";
import Contacts from "../Pages/contacts";
import CustomDrawer from "./customDrawer";
import TransactionTab from "./tabs/transact";
const Tab = createMaterialBottomTabNavigator();
export default function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="home-tab"
			screenOptions={{ headerShow: false }}>
			<Tab.Screen
				name="home-tab"
				component={CustomDrawer}
				options={{
					tabBarLabel: "Custom Home",
				}}
			/>
			<Tab.Screen name="transaction-tab" component={TransactionTab} />
			<Tab.Screen name="contacts-tab" component={Contacts} />
		</Tab.Navigator>
	);
}
