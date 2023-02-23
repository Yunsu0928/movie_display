function Contents(props) {
	// // console.log(props.item);
	// console.log(props);
	// console.log(props.imageUrl + props.item.poster_path);

	return (
		<div className="contents">
			<div className="image">
				<img src={props.imageUrl + props.item.poster_path} alt=""></img>
			</div>
			<div className="title-box">
				<div className="title">{props.item.title}</div>
				<div className="score">{props.item.vote_average}</div>
			</div>
			<div className="overview-box">
				<div>Overview</div>
				<div>{props.item.overview}</div>
			</div>
		</div>
	);
}

export default Contents;
