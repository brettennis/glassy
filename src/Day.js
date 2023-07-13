import React, { useState } from 'react';
import Hour from "./Hour.js"
import './Day.css'

export default function Day({ daydata }) {

    const [isActive, setIsActive] = useState(true);

    const dataHours = daydata || []
	const displayHours = []
	for (let i = 0; i < dataHours.length; i++) {
		if (i % 3 === 0) {
			displayHours.push(dataHours[i])
		}
	}

    let dateObject = new Date(daydata[0].time)
    let weekday = dateObject.toLocaleString("en-us", {
        weekday: "long",
    })
    let date = dateObject.toLocaleString("en-us", {
        dateStyle: "short"
    })


    return (
        <div className="menu" onClick={() => setIsActive(!isActive)}>
            <div className="header">
                {weekday} {isActive ? '-' : '+'}
            </div>
            {displayHours.map((hour) => (
                <Hour key={hour.time} hourdata={hour} />
            ))}
        </div>
    )
}