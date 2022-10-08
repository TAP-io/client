import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transact from "../../Pages/transact";
const Stack = createNativeStackNavigator();

export default function TransactionTab() {
	return (
		<Stack.Navigator
			initialRouteName="transact"
			defaultStatus="open"
			screenOptions={{ headerShow: false }}>
			<Stack.Screen
				name="transact"
				component={Transact}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
