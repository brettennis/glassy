import { useEffect, useState } from "react";
import Hour from "./Hour.js"
import Header from "./Header.js"
import './App.css'


function App() {

	const [data, setData] 		= useState(null)
	const [loading, setLoading] = useState(false)
    const [error, setError]     = useState(null)
	
	useEffect(() => {
		const localFetch = JSON.parse(localStorage.getItem("glassy.fetch"))
		setData(localFetch)
		fetchNewData(defaultData)
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

	if (loading) return (
		<div className="App">
			<Header />
			<h3 style={{
				color:"var(--white-light)",
				textAlign: "center"
			}}>
				Retrieving data...
			</h3>
		</div>
	)
	if (error) console.log(error)

	const dataHours = data?.hours || []
	const displayHours = []
	for (let i = 0; i < dataHours.length; i++) {
		if (i % 3 === 0) {
			displayHours.push(dataHours[i])
		}
	}

	return (
		<div className="App">
			<Header />
			{displayHours.map((hour) => (
				<Hour key={hour.time} hourdata={hour} />
			))}
			{/* <Hour key={data?.hours[0].time} hourdata={data?.hours[0]} /> */}
		</div>
	)
}

export default App;
