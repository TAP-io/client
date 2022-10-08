import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Pages/home";
const Stack = createNativeStackNavigator();

export default function HomeTab() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			defaultStatus="open"
			screenOptions={{ headerShow: false }}>
			<Stack.Screen
				name="home blah"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
