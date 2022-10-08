import { useMemo, useState } from "react";

const AllData = () => {
	const [address, setAddress] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const provider = useMemo(
		() => ({
			loggedIn,
			setLoggedIn,
			address,
			setAddress,
		}),
		[loggedIn, setLoggedIn, address, setAddress]
	);
	return provider;
};

export default AllData;
