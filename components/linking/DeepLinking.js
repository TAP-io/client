import React, { useEffect } from "react";
import { Container, Text } from "../core";

export default function DeepLinking() {
	function handleDeepLink(event) {
		let data = Linking.parse(event.url);
		if (data.scheme === "https") {
			if (data.path) {
				var params = data.path.split("/");
				if (params[0] === "transaction") {
					navigation.navigate(`transact`, {
						toAddress: params[1],
						amount: params[2],
						currency: params[3],
					});
				} else if (params[0] === "contact") {
					navigation.navigate(`new-contact`, {
						address: params[1],
						name: params[2],
					});
				}
			} else {
				Linking.addEventListener("url", handleDeepLink);
			}
		} else {
			if (data.path) {
				if (data.path === "transaction") {
					// TODO: NAVIGATE TO THE TRANSACT PAGE WITH THE TRANSACTION PARAMS
					navigation.navigate(`send-currency`, {
						toAddress: data.queryParams.toAddress,
						amount: data.queryParams.amount,
						currency: data.queryParams.currency,
					});
				} else if (data.path === "contact") {
					navigation.navigate(`new-contact`, {
						address: data.queryParams.address,
						name: data.queryParams.name,
					});
				}
			} else {
				Linking.addEventListener("url", handleDeepLink);
			}
		}
	}

	async function addLinkingListener() {
		let deepLink = await Linking.getInitialURL();
		if (deepLink) {
			handleDeepLink({ url: deepLink });
		}
		Linking.addEventListener("url", handleDeepLink);
	}

	useEffect(() => {
		addLinkingListener();
	}, []);

	return <Container>{/* <Text>Deep Linking</Text> */}</Container>;
}
