import { View } from "react-native";
import { Colors } from "../../styles/styles";
import { Container, Icon } from "../core";

export default function ScanImage(props) {
	let color = props.color ? props.color : Colors.primary;
	let center = {
		position: "absolute",
	};

	return (
		<Container
			fullWidth
			flex
			column
			justifyCenter
			alignCenter
			style={{
				height: 250,
				position: "relative",
				marginVertical: 30,
			}}>
			<View
				column
				justifyCenter
				style={{
					height: 250,
					width: 250,
					borderRadius: 125,
					backgroundColor: color,
					opacity: 0.2,
				}}
			/>

			<View
				style={{
					...center,
					height: 150,
					width: 150,
					borderRadius: 75,
					backgroundColor: color,
					opacity: 0.4,
				}}
			/>
			<View
				style={{
					...center,
					height: 80,
					width: 80,
					zIndex: 3,
					borderRadius: 40,
					backgroundColor: color,
					opacity: 0.6,
				}}
			/>
			<Icon
				name="contactless-payment"
				type="MaterialCommunity"
				xl
				style={{ zIndex: 4, ...center }}
			/>
		</Container>
	);
}
