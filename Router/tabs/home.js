import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Pages/home";
const Stack = createNativeStackNavigator();

export default function HomeTab() {
	return (
		<Stack.Navigator
			initialRouteName="home-feed"
			defaultStatus="open"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name="home-feed" component={Home} />
		</Stack.Navigator>
	);
}
