import React, { useContext } from "react";
import { Context } from "../Providers/provider";

import TransactionTab from "./tabs/transact";
import ContactsTab from "./tabs/contacts";
import CustomDrawer from "./customDrawer";

import { View, StyleSheet } from "react-native";
import { Container, Icon } from "../components/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardStyles, Colors } from "../styles/styles";

// Vars
const Tab = createBottomTabNavigator();

const style = StyleSheet.create({
	box: {
		// bottom: 25,
		// left: 10,
		// right: 10,
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.4,
		shadowRadius: 2.5,
		elevation: 4,
	},
	createButton: {
		borderRadius: 100,
		padding: 2,

		transform: [{ translateY: -20 }],
	},
	tabStyle: {
		flex: 1,
		height: "100%",
		alignItems: "center",
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	focusedTab: { opacity: 1 },
	unfocusedTab: { opacity: 0.5 },
});

export default function TabNavigator() {
	const { loggedIn } = useContext(Context);

	function ContactIcon({ focused }) {
		return (
			<View
				style={[
					style.tabStyle,
					focused ? style.focusedTab : style.unfocusedTab,
				]}>
				<Icon
					name="contacts"
					type={"MaterialCommunity"}
					lg
					text={focused}
					secondary={!focused}
				/>
			</View>
		);
	}

	function HomeBarIcon({ focused }) {
		return (
			<View
				style={[
					style.tabStyle,
					focused ? style.focusedTab : style.unfocusedTab,
				]}>
				<Icon name="home" lg text={focused} secondary={!focused} />
			</View>
		);
	}
	function CreateBarIcon({ focused }) {
		return (
			<Container
				flex
				column
				justifyCenter
				alignCenter
				style={{
					backgroundColor: Colors.primary,
					width: 60,
					height: 70,
					height: 20,
					...CardStyles.shadow,
					...style.createButton,
					borderWidth: focused ? 3 : 0,
					borderColor: focused ? Colors.primaryAccent : "transparent",
					position: "relative",
				}}>
				<Icon name="contactless-payment" type="MaterialCommunity" lg />
			</Container>
		);
	}

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
			tabBarOptions={{
				showLabel: false,
				style: {
					backgroundColor: Colors.fg,
					...style.box,
					...style.shadow,
				},
			}}>
			<Tab.Screen
				name="home-tab"
				component={CustomDrawer}
				options={{
					tabBarLabel: "Home Feed",
					tabBarIcon: ({ focused }) => <HomeBarIcon focused={focused} />,
				}}
			/>
			<Tab.Screen
				name="transaction-tab"
				component={TransactionTab}
				options={{
					tabBarVisible: false,
					tabBarLabel: "Be Heard",
					tabBarIcon: ({ focused }) => <CreateBarIcon focused={focused} />,
				}}
			/>
			<Tab.Screen
				name="profileTab"
				component={ContactsTab}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ focused }) => <ContactIcon focused={focused} />,
				}}
			/>
		</Tab.Navigator>
	);
}
