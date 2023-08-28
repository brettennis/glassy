import React, { useState } from 'react';
import Hour from "./Hour.js";
import './Day.css';

export default function Day({ daydata }) {

    const [isOpen, setIsOpen] = useState(false);

    const dataHours = daydata || [] ;
	const displayHours = [];
	for (let i = 0; i < dataHours.length; i++) {
		if (i % 3 === 0) {
			displayHours.push(dataHours[i]);
		}
	}

    let dateObject = new Date(daydata[0].time);
    let weekday = dateObject.toLocaleString("en-us", {
        weekday: "long",
    });
    // let date = dateObject.toLocaleString("en-us", {
    //     dateStyle: "short"
    // });

    return (
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            
            <div className="header">
                {weekday} 
            </div>

            {isOpen &&
                <div style={{display: "flex"}}>
                    <h6 style={{marginLeft: "-2rem"}}>Air Temp</h6>
                    <h6 style={{marginLeft: "6.5rem"}}>Swell</h6>
                    <h6 style={{marginLeft: "8.5rem"}}>Wind</h6>  
                </div>
            }

            <ul>
                {isOpen && displayHours.map((hour) => (
                    <li><Hour key={hour.time} hourdata={hour} /></li>
                ))}
            </ul>
            
        </div>
    );
}