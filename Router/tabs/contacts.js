import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewContact from "../../Pages/addContact";
import Contacts from "../../Pages/contacts";
const Stack = createNativeStackNavigator();

export default function ContactsTab() {
	return (
		<Stack.Navigator
			initialRouteName='contacts'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='contacts' component={Contacts} />
			<Stack.Screen name='new-contact' component={NewContact} />
		</Stack.Navigator>
	);
}
