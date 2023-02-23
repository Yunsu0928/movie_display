import "./css/main.css";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import { useState } from "react";


function App() {
	const [searchValue, setSearchValue] = useState("");

	// console.log("searchValue : ", searchValue);

	return (
		<>
			<Header setSearchValue={setSearchValue} />
			<Container searchValue={searchValue} />
			<Footer />
		</>
	);
}

export default App;
