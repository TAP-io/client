import { Alert } from "react-native";
import NfcManager, { NfcEvents, NfcTech, Ndef } from "react-native-nfc-manager";
export const writeNFC = async () => {
	// takes value and writes it to NFC tag in range
	let result = false;

	try {
		await NfcManager.requestTechnology(NfcTech.NfcA);
		const bytes = NfcA.encodeMessage([NfcA.textRecord("Hello NFC")]);
		if (bytes) {
			await NfcManager.ndefHandler.writeNfcAMessage(bytes);
			result = true;
		}
	} catch (e) {
		console.warn(e);
	} finally {
		NfcManager.cancelTechnologyRequest();
	}
	return result;
};
export const readNFC = async () => {
	//looks for nearby NFC tags and reads and sets value
	let data = null;
	try {
		await NfcManager.requestTechnology(NfcTech.NfcA);
		const data = await NfcManagerManger.getTag();
		Alert.alert("tag found", data);
	} catch (e) {
		console.warn(e.toString());
	} finally {
		NfcManager.cancelTechnologyRequest();
	}
	return data;
};

export const readNFCWithCallback = async () => {
	//looks for nearby NFC tags and reads and sets value
	NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
		Alert.alert("tag found", tag);
	});
	// try {
	// 	await NfcManager.requestTechnology(NfcTech.NfcA);
	// 	const data = await NfcManagerManger.getTag();
	// 	console.warn("Tag Found", data);
	// } catch (e) {
	// 	console.warn(e.toString());
	// } finally {
	// 	NfcManager.cancelTechnologyRequest();
	// }
};
