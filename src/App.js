import { useEffect, useState } from "react";
import Hour from "./Hour.js"

function App() {

	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
    const [error, setError]     = useState(null)
	
	useEffect(() => {
		const localFetch = JSON.parse(localStorage.getItem("glassy.fetch"))
		setData(localFetch)
		console.log("Data fetched.")
	}, [])

    const fetchNewData = ({ lat, lng, paramArray, start }) => {
		const api_key = "3950a254-17b4-11ee-86b2-0242ac130002-3950a308-17b4-11ee-86b2-0242ac130002"
        setLoading(true)
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${String(paramArray)}&start=${start}`, {
              	headers: { "Authorization": api_key } }).then(res => res.json()).then(d => {
			setData(d)
            localStorage.setItem("glassy.fetch", JSON.stringify(data))
		}).catch((e) => {
            setError(e)
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
		start: Date.now()
	}

	const handleRefresh = () => {
		fetchNewData(defaultData)
	}

	if (loading) return <h3>retrieving data...</h3>
	if (error) console.log(error)

	const listHours = data?.hours || []
	// const displayHours = []

	// let i = 0
	// while (i < listHours.length) {
	// 	displayHours.push(<Hour hourdata={listHours[i]} />)
	// 	i++
	// }

	return (
		<div className="App">
			<button onClick={handleRefresh}>Refresh</button>
			{listHours.map((hour) => (
				<Hour key={hour.time} hourdata={hour} />
			))}
		</div>
	)
}

export default App;
