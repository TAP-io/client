import { useMemo, useState } from "react";

const AllData = () => {
	const [address, setAddress] = useState("");
	const [name, setName] = useState("");
	const [isSpanish, setIsSpanish] = useState(false);
	const provider = useMemo(
		() => ({
			address,
			setAddress,
			name,
			setName,
			isSpanish,
			setIsSpanish,
		}),
		[address, setAddress, name, setName, isSpanish, setIsSpanish]
	);
	return provider;
};

export default AllData;
