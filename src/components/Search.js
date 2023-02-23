function Search(props) {
	// const handleChange = (event) => {
	// 	props.setFilter(event.target.value);
	// };

	return (
		<input
			className="search-form"
			value={props.filter}
			onChange={(e) => props.setFilter(e.target.value)}
		/>
	);
}

export default Search;
