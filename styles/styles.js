import { Dimensions, StyleSheet } from "react-native";

export const Colors = {
	// primary: "#6840D9",
	primaryLight: "#8F67FF",
	primaryDark: "#3C0095",
	// BLUE
	accent1Light: "#8ED6FF",
	accent1Dark: "#0085BE",
	// PINK
	accent2Light: "#FF61C0",
	accent2Dark: "#BC0063",
	//Others
	urgent: "#ed7286",

	yellow: "#ffc107",
	white: "#fff",
	black: "#000",
	border: "#c4c4c4",

	primary: "#8F67FF",
	primaryAccent: "#613acf",
	accent1: "#77C8E2",
	accent2: "#E44EA0",
	text: "#000000",
	textSecondary: "#666666",
	bg: "#FFFFFF",
	fg: "#F0F0F0",
	cardFg: "#F0F0F0",
	card: "#FFFFFF",
	button: "#EEF2F6",
	blur: "#333333",
	danger: "#F66363",
	success: "#5ac771",
	textLink: "#0645ad",
	accent1Button: "#77C8E250",
	accent1ButtonText: "#0085BE",
	accent2Button: "#D14A9430",
	accent2ButtonText: "#BC0063",
	primaryButton: "#8F67FF50",
	primaryButtonText: "#3C009F",
};
export const Dim = {
	width: Dimensions.get("window").width,
	height: Dimensions.get("window").height,
	sm: 5,
	md: 10,
	lg: 15,
	xl: 20,
	xxl: 40,
};
let extraLargeSize = 35;
let titleSize = 24;
let subTitleSize = 20;
let bodySize = 14;
let bodyLarge = 18;
let smallSize = 12;
let buttonLargeSize = 16;
export const fontSizes = {
	extraLargeSize,
	titleSize,
	subTitleSize,
	bodySize,
	bodyLarge,
	smallSize,
	buttonLargeSize,
};
export const Font = {
	extraLarge: {
		size: extraLargeSize,
		family: "OpenSans_700Bold",
	},
	title: {
		size: titleSize,
		family: "OpenSans_500Medium",
	},
	titleBold: {
		size: titleSize,
		family: "OpenSans_600SemiBold",
	},
	subTitle: {
		size: subTitleSize,
		family: "OpenSans_400Regular",
	},
	subTitleBold: {
		size: subTitleSize,
		family: "OpenSans_600SemiBold",
	},
	body: {
		size: bodySize,
		family: "Roboto_400Regular",
	},
	bodyLarge: {
		size: bodyLarge,
		family: "Roboto_400Regular",
	},
	bodyBold: {
		size: bodySize,
		family: "Roboto_700Bold",
	},
	buttonTextSmall: {
		size: smallSize,
		family: "OpenSans_500Medium",
	},
	buttonText: {
		family: "OpenSans_600SemiBold",
	},
	buttonTextLarge: {
		size: buttonLargeSize,
		family: "OpenSans_600SemiBold",
	},
	small: {
		size: smallSize,
		family: "Roboto_400Regular",
	},
	smallBold: {
		size: smallSize,
		family: "OpenSans_600SemiBold",
	},
	title_Italic: {
		size: titleSize,
		family: "OpenSans_500Medium_Italic",
	},
	titleBold_Italic: {
		size: titleSize,
		family: "OpenSans_800ExtraBold_Italic",
	},
	subTitle_Italic: {
		size: subTitleSize,
		family: "OpenSans_400Regular_Italic",
	},
	subTitleBold_Italic: {
		size: subTitleSize,
		family: "OpenSans_600SemiBold_Italic",
	},
	body_Italic: {
		size: bodySize,
		family: "Roboto_400Regular_Italic",
	},
	bodyLarge_Italic: {
		size: bodyLarge,
		family: "Roboto_400Regular_Italic",
	},
	bodyBold_Italic: {
		size: bodySize,
		family: "Roboto_700Bold_Italic",
	},
	small_Italic: {
		size: smallSize,
		family: "Roboto_400Regular_Italic",
	},
	smallBold_Italic: {
		size: smallSize,
		family: "OpenSans_800ExtraBold_Italic",
	},
	serifTitle: {
		family: "SourceSerifPro_900Black",
	},
};
export const UtilityStyles = StyleSheet.create({});
export const CardStyles = StyleSheet.create({
	sectionCard: {
		padding: 10,
		marginVertical: 2.5,
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.4,
		shadowRadius: 1.5,
		elevation: 2,
	},

	container: {
		padding: 10,
		width: "100%",
	},
	card: {
		borderRadius: 5,
		padding: 10,
		marginVertical: 2,
		alignSelf: "center",
	},

	cardContent: {
		width: "100%",
		paddingVertical: 10,
		alignItems: "flex-start",
		textAlign: "left",
	},
	cardAvatarSmall: {
		height: 20,
		width: 20,
		borderRadius: 20,
	},
	cardAvatar: {
		height: 40,
		width: 40,
		borderRadius: 40,
	},
	cardAvatarLarge: {
		height: 60,
		width: 60,
		borderRadius: 30,
	},

	option: {
		borderWidth: 2,
		borderStyle: "solid",
		marginVertical: 2,
		borderRadius: 5,
	},
	listCardBorder: {
		marginVertical: 1.5,
		paddingVertical: 6,
		paddingHorizontal: 10,
		width: "100%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		alignSelf: "center",
		borderWidth: 1,
	},
	listCard: {
		marginVertical: 1.5,
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		// alignSelf: "center",
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.4,
		shadowRadius: 1.5,
		elevation: 2,
	},
	subscriptionCard: {
		paddingHorizontal: 5,
	},

	subscriptionPrice: {
		paddingVertical: 5,
	},
});
export const ModalStyles = StyleSheet.create({
	modalWrapperBottom: {
		height: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
		width: "100%",
		position: "relative",
		bottom: 0,
	},
	modalWrapperTop: {
		height: Dim.height,
		width: Dim.width,
		display: "flex",
		margin: 0,
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		width: "100%",
		position: "relative",
		top: 0,
	},
	fullScreenModal: {
		height: "100%",
		width: "100%",
	},
	behindModal: {
		// position: "absolute",
		width: Dim.width,
		height: Dim.height,
		opacity: 0.5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.4,
		shadowRadius: 1.5,
		zIndex: -1,
	},
	modalBottom: {
		position: "absolute",
		width: Dim.width,
		height: Dim.height * 0.6,
		bottom: 0,
		opacity: 1,
		marginHorizontal: 0,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.5,
	},
	modalTop: {
		// position: "absolute",
		width: Dim.width,
		height: Dim.height * 0.6,
		top: 0,
		opacity: 1,
		marginHorizontal: 0,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3.5,
	},
	modalFull: { height: Dim.height * 0.8 },
	modalCenter: {},

	optionButton: {
		borderRadius: 5,
		height: 75,
		paddingHorizontal: 25,
		margin: Dim.width * 0.01,
		width: "48%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginRight: "auto",
	},
});
export const GlobalStyles = StyleSheet.create({
	//Containers
	border: {
		borderWidth: 1,
		borderStyle: "solid",
	},
	container: {
		padding: 10,
		margin: 10,
		borderRadius: 10,
		width: "100%",
		alignSelf: "center",
	},
	stdCard: {
		borderRadius: 5,
		padding: 5,
	},
	screenContainer: {
		flex: 1,
		padding: 5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
		position: "relative",
	},
	pageHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	scrollContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		padding: 5,
	},
	focusContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		padding: 5,
		paddingTop: 10,
	},
	scrollContainerCenter: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		padding: 5,
		alignItems: "center",
	},

	listLoadingCard: {
		marginVertical: 2,
		paddingVertical: 15,
		width: "100%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignSelf: "center",
		borderWidth: 1,
	},
	largeLoadingCard: {
		margin: 5,
		padding: 15,
		width: "100%",
		height: "100%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignSelf: "center",
		borderWidth: 1,
	},

	listButton: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		borderRadius: 5,
		padding: 10,
		marginVertical: 1,
	},

	//Buttons
	buttonGroup: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		paddingVertical: 5,
	},
	actionButton: {
		padding: 10,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 100,
		margin: 5,
		zIndex: 1,
		position: "relative",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.5,
		elevation: 1,
	},
});
