import { useMemo, useState } from "react";

const AllData = () => {
	const [address, setAddress] = useState("");
	const [name, setName] = useState("");
	const provider = useMemo(
		() => ({
			address,
			setAddress,
			name,
			setName,
		}),
		[address, setAddress, name, setName]
	);
	return provider;
};

export default AllData;
