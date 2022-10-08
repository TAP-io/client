import React from "react";
import { Container, Text } from "../core";

export default function DeepLinking() {
	function handleDeepLink(event) {
		let data = Linking.parse(event.url);
		if (data.scheme === "https") {
			if (data.path) {
				var params = data.path.split("/");
				if (params[0] === "post" && params[1] !== "discussion") {
					navigation.navigate(`focus-post`, {
						postID: params[1],
					});
				} else if (params[0] === "post" && params[1] === "discussion") {
					navigation.navigate(`focus-comment`, {
						postID: params[2],
					});
				} else if (params[0] === "feed") {
					navigation.navigate(`singleFeed`, {
						communityID: params[1],
					});
				} else if (params[0] === "profile") {
					navigation.navigate(`profile`, {
						profileID: params[1],
						isOrg: params[2],
					});
				}
			} else {
				Linking.addEventListener("url", handleDeepLink);
			}
		} else {
			if (data.path) {
				if (data.path === "post") {
					navigation.navigate(`focus-post`, {
						postID: data.queryParams.postID,
					});
				} else if (data.path === "discussion") {
					navigation.navigate(`focus-comment`, {
						postID: data.queryParams.postID,
					});
				} else if (data.path === "community") {
					navigation.navigate(`singleFeed`, {
						communityID: data.queryParams.communityID,
					});
				} else if (data.path === "profile") {
					navigation.navigate(`profile`, {
						profileID: data.queryParams.profileID,
						isOrg: data.queryParams.isOrg,
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

	return (
		<Container>
			<Text>Deep Linking</Text>
		</Container>
	);
}
