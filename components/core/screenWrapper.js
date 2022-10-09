// File: Reusable loading wrapper
// Default
import React, { useCallback, useContext, useState } from "react";
// Theming
// Libraries
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { Context } from "../../Providers/provider";
import { Colors, Dim } from "../../styles/styles";
import Login from "../auth/loginMethods";
import Header from "../header/header";
import LoadingWrapper from "./loadingWrapper";
export default function ScreenWrapper({
	scrollEnabled,
	onRefresh,
	loading,
	children,
	bottomLoading,
	paddingX,
	paddingY,
	goBack,
}) {
	const { address } = useContext(Context);
	const [refreshing, setRefreshing] = useState(false);

	const isCloseToBottom = ({
		layoutMeasurement,
		contentOffset,
		contentSize,
	}) => {
		const paddingToBottom = 1000;
		return (
			layoutMeasurement.height + contentOffset.y >=
			contentSize.height - paddingToBottom
		);
	};
	const onRefreshWrapper = useCallback(async () => {
		setRefreshing(true);
		onRefresh();
		setRefreshing(false);
	});

	return (
		<>
			<Header goBack={goBack} />
			<ScrollView
				refreshControl={
					onRefresh ? (
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh ? onRefreshWrapper : null}
						/>
					) : null
				}
				scrollEnabled={scrollEnabled ? true : false}
				backgroundColor={Colors.bg}>
				<View style={{ alignItems: "center" }}>
					{loading ? (
						<LoadingWrapper loading={loading}>
							<></>
						</LoadingWrapper>
					) : (
						<View
							style={{
								maxWidth: 500,
								paddingHorizontal: paddingX ? paddingX : 6,
								paddingVertical: paddingY ? paddingY : 6,
								flex: 1,
								width: "100%",
								height: "100%",
								zIndex: 1,
							}}>
							{children}
						</View>
					)}
					<LoadingWrapper loading={bottomLoading}>
						<></>
					</LoadingWrapper>
					<View height={100} />
				</View>
			</ScrollView>
		</>
	);
}
