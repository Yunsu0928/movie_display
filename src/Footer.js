// 최상위로 끌어올리는 버튼을 만들고 싶다

function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer>
			<div className="btn-top" onClick={scrollToTop}>
				TOP
			</div>
		</footer>
	);
}

export default Footer;
