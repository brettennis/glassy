import { useEffect, useState } from "react";
import Hour from "./Hour.js"

// const doRequest = false;
// let api_key = "";
// if (doRequest) api_key = "3950a254-17b4-11ee-86b2-0242ac130002-3950a308-17b4-11ee-86b2-0242ac130002";

// const lat = 34.4244;
// const lng = -77.5450;
// const params = 'waveHeight, airTemperature';

// fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   	headers: { 'Authorization': api_key }
// }).then((response) => response.json()).then((jsonData) => {
//   	this.setState({
// 		isLoaded: true,
// 		items: jsonData
//   	})
// });

function App() {

	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
    const [error, setError]     = useState(null)
	
	useEffect(() => {
		const localFetch = JSON.parse(localStorage.getItem("glassy.fetch"))
		setData(localFetch)
	}, [])

    const fetchNewData = ({ lat, lng, paramArray }) => {
		const api_key = "3950a254-17b4-11ee-86b2-0242ac130002-3950a308-17b4-11ee-86b2-0242ac130002"
        setLoading(true)
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${String(paramArray)}`, {
              	headers: { "Authorization": api_key } }).then(res => res.json()).then(data => {
			setData(data)
            localStorage.setItem("glassy.fetch", JSON.stringify(data))
		}).catch((err) => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }

	const defaultData = {
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
	}

	const handleRefresh = () => {
		fetchNewData(defaultData)
	}

	if (loading) return <h3>loading...</h3>
	if (error) console.log(error)

	console.log(data?.hours)

  	return (
    	<div className="App">
			<button onClick={handleRefresh}>Refresh</button>
			{/* <Hour hourdata={data.hours} /> */}
			<p>{JSON.stringify(data)}</p>
    	</div>
  	);   
}

export default App;
