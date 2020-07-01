import React, { useState } from 'react';
import DtcSpinner from '../../SharedComponents/Dtc-Spinner/DtcSpinner';
import CustomLoader from 'react-spinners/ScaleLoader';

function SpinnerComponent(props) {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const fetchData = () => {
		alert('Fetching data from api');
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				setLoading(false);
			})
			.catch((error) => {
				alert('Error found');
				setLoading(false);
			});
	};

	const handleClick = () => {
		setLoading(true);
		fetchData();
	};
	return (
		<div>
			<button className="spinner-button" onClick={handleClick}>
				Click Me
			</button>
			<DtcSpinner customIcon={false} icon="./Assets/loader.svg" loading={loading}>
				<CustomLoader size={50} color="#42d4f5" />
			</DtcSpinner>
			{data.map((user, index) => <h3 key={index}>{user.title}</h3>)}
		</div>
	);
}

export default SpinnerComponent;
