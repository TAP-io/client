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
export async function readMifare() {
	let mifarePages = [];

	try {
		// STEP 1
		let reqMifare = await NfcManager.requestTechnology(
			NfcTech.MifareUltralight
		);

		const readLength = 60;
		const mifarePagesRead = await Promise.all(
			[...Array(readLength).keys()].map(async (_, i) => {
				const pages = await NfcManager.mifareUltralightHandlerAndroid // STEP 2
					.mifareUltralightReadPages(i * 4); // STEP 3
				mifarePages.push(pages);
			})
		);
	} catch (ex) {
		console.warn(ex);
	} finally {
		// STEP 4
		NfcManager.cancelTechnologyRequest();
	}

	return mifarePages;
}

export async function readTagCopyMifare() {
	let tag = null;

	try {
		await NfcManager.requestTechnology([NfcTech.Ndef]);

		tag = await NfcManager.getTag();
		tag.ndefStatus = await NfcManager.ndefHandler.getNdefStatus();

		if (Platform.OS === "ios") {
			await NfcManager.setAlertMessageIOS("Success");
		}
	} catch (ex) {
		// for tag reading, we don't actually need to show any error
		console.log(ex);
	} finally {
		NfcManager.cancelTechnologyRequest();
	}
	Alert.alert(tag);
	return tag;
}
export async function readTagCopy() {
	let tag = null;

	try {
		await NfcManager.requestTechnology([NfcTech.Ndef]);

		tag = await NfcManager.getTag();
		console.log({ tag });
		tag.ndefStatus = await NfcManager.ndefHandler.getNdefStatus();
		console.log(tag.ndefStatus);
		if (Platform.OS === "ios") {
			await NfcManager.setAlertMessageIOS("Success");
		}
	} catch (ex) {
		// for tag reading, we don't actually need to show any error
		console.log(ex);
	} finally {
		NfcManager.cancelTechnologyRequest();
	}
	Alert.alert(tag);
	return tag;
}
