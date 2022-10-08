import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AwaitingSend from "../../Pages/awaitingSend";
import FinishTransaction from "../../Pages/finishTransaction";
import SendContact from "../../Pages/sendContact";
import SendCurrency from "../../Pages/sendCurrency";
import SendNFT from "../../Pages/sendNft";
import Transact from "../../Pages/transactWaiting";
const Stack = createNativeStackNavigator();

export default function TransactionTab() {
	return (
		<Stack.Navigator
			initialRouteName="transact"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name="transact" component={Transact} />
			<Stack.Screen name="send-currency" component={SendCurrency} />
			<Stack.Screen name="send-nft" component={SendNFT} />
			<Stack.Screen name="send-contact" component={SendContact} />
			<Stack.Screen name="awaiting-send" component={AwaitingSend} />
			<Stack.Screen name="finish-transaction" component={FinishTransaction} />
		</Stack.Navigator>
	);
}
