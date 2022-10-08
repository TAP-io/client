import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tabNavigator";
const Stack = createNativeStackNavigator();

export default function InitialRouter() {
	return (
		<Stack.Navigator
			initialRouteName="tabs"
			defaultStatus="open"
			options={{ headerShown: false }}>
			<Stack.Screen
				name="tabs"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
