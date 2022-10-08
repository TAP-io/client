import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import Login from "../Pages/login";
import { Context } from "../Providers/provider";
import TabNavigator from "./tabNavigator";
const Stack = createNativeStackNavigator();

export default function InitialRouter() {
	const { loggedIn } = useContext(Context);
	return (
		<Stack.Navigator
			initialRouteName={loggedIn ? "tabs" : "login"}
			defaultStatus="open"
			options={{ headerShown: false }}>
			<Stack.Screen
				name="tabs"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="login" component={Login} />
		</Stack.Navigator>
	);
}
