/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "./Header.js";
import Day from "./Day.js";
import Hour from "./Hour.js";
import './App.css';


function App() {

	const [data, setData] 		= useState(null);
	const [loading, setLoading] = useState(false);
    const [error, setError]     = useState(null);
	
	useEffect(() => {
		fetchNewData({
			lat: 34.4244,
			lng: -77.5450,
			paramArray: [
				'airTemperature', 
				'precipitation',
				'cloudCover',
				'gust',
				'windDirection',
				'windSpeed',
				'swellDirection', 
				'swellHeight',
				'swellPeriod',
			],
			start: Date.now()
		});
	}, []);

    function fetchNewData({ lat, lng, paramArray, start }) {
		const api_key = "3950a254-17b4-11ee-86b2-0242ac130002-3950a308-17b4-11ee-86b2-0242ac130002";
        setLoading(true);
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${String(paramArray)}&start=${start}`, {
              	headers: { "Authorization": api_key } }).then(res => res.json()).then(d => {
			setData(d)
            localStorage.setItem("glassy.fetch", JSON.stringify(data))
		}).catch((e) => {
            setError(e)
        }).finally(() => {
            setLoading(false)
        });
    }

	if (loading) return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<Loading />
	);
	if (error) console.log(error);

	// const dataHours = data?.hours || [] ;
	// let days = [];
	// let currentDay = [];
	// for (let i = 0; i < dataHours.length; i++) {
	// 	currentDay.push(dataHours[i]);
	// 	if (currentDay.length >= 24) {
	// 		days.push(currentDay);
	// 		currentDay = [];
	// 	}
	// }

	const dataHours = data?.hours || [] ;
	let days = [];
	let currentDay = [];
	for (let i = 0; i < dataHours.length; i++) {
		let currHour = dataHours[i];
		currentDay.push(currHour);

		let dateObject = new Date(currHour.time);
		let currTime = dateObject.toLocaleString("en-us", {
			weekday: "long",
		});
		
		if (currTime === 4) {
			days.push(currentDay);
			currentDay = [];
		}
	}
	
	return (
		<div className="App">
			<Header />
			<div style={{height: "8.5rem"}}></div>
			{dataHours[0] && <>
				<Hour hourdata={dataHours[0]} />
				<Hour hourdata={dataHours[3]} />
				<Hour hourdata={dataHours[6]} />
				<Hour hourdata={dataHours[9]} />
				<Hour hourdata={dataHours[12]} />

				</>}
			<DayList days={days} />
		</div>
	);
}

function DayList({ days }) {
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<div className="day-list">
			{days.map((day) => (
				<Day key={day[0].time} daydata={day} />
			))}
		</div>
	);
}

function Loading() {
	return (
		<div className="App">
			<Header />
			<div style={{height: "8.5rem"}}></div>
			<div className="loading" style={{
				height: "100vh", 
				backgroundColor: "var(--gray-light)",
				padding: "2rem"}}>
				Retrieving data...
			</div>
		</div>
	);
}

export default App;
