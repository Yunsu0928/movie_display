//Search.js 연결해야함
import { useState, useEffect } from "react";
import Search from "./components/Search";

function Header({ setSearchValue }) {
	const [filter, setFilter] = useState("");

	useEffect(() => {
		setSearchValue(filter);
	}, [filter]);

	return (
		<header>
			{/* div 대신에 header를 줄 수 있다!!!! */}
			<Search filter={filter} setFilter={setFilter} />
		</header>
	);
}

export default Header;
