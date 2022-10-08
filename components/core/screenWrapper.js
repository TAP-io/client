// File: Reusable loading wrapper
// Default
import React, { useCallback, useState } from "react";
// Theming
// Libraries
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { Colors, Dim } from "../../styles/styles";
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
}) {
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
			backgroundColor={Colors.bg}
			style={{
				borderRadius: 10,
			}}>
			<SafeAreaView>
				<Header />
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
			</SafeAreaView>
		</ScrollView>
	);
}
