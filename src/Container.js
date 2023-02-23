//Contents연결
import { useState } from "react";
import { data } from "./assets/data/data"; // default가 있냐없냐 차이!!! 있으면 {}없이 불러오기, 없으면 {}있이 불러오기
import Contents from "./components/Contents";
import { useEffect } from "react";

function Container({ searchValue }) {
	const [items, setItems] = useState([]);
	const [imageUrl, setImageUrl] = useState();

	// console.log(searchValue);
	//itmes >> data 값을 받아온걸 넣어주려고 items를 선언했는데,
	// dummydata를 가져오는데, 그걸 변수에 저장해야 내가 사용할수있는거지!!!!!
	// map을 돌리기 위해서는 뭔가 있어야 하는데 뭔가가 items인거지!!!!!!!
	// items는 비어있단말이지, 뭔가를 저장해야하는데 그게 더미데이터
	// 그 더미데이터를 받아와서 저장하는게
	// useEffect는 호출하는 함수!!!!! DOM이 생성됐을때(업데이트) 호출되는 함수!!!!!
	// 데이터 가져오기를 수행하거나 다른 명령형 API를 호출할 수도 있다
	useEffect(() => {
		setItems(data.results); // setItems는 함수니까!!!! data.results값을 넣어주면 자동으로 items에 저장된다
		setImageUrl(data.imageUrl);
	}, []);

	return (
		<div className="container">
			{items
				.filter((item) => {
					return item.title.toLowerCase().includes(searchValue.toLowerCase());
				})
				.map((item) => (
					<Contents key={item.id} item={item} imageUrl={imageUrl} />
				))}
		</div>
	);
}

export default Container;
