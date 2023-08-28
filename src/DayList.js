import Day from './Day.js';

export default function DayList({ dataHours }) {

	let days = [];
	let currentDay = [];
	for (let i = 0; i < dataHours.length; i++) {
		currentDay.push(dataHours[i]);
		if (currentDay.length >= 24) {
			days.push(currentDay);
			currentDay = [];
		}
	}

    return (
        <div className="day-list" style={{
            backgroundColor: "#3b444d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "45"
        }}>

            <h6 style={{margin: "1rem"}}>Daily Forecast</h6>

            {days.map((day) => (
                <Day key={day[0].time} daydata={day} />
            ))}
        </div>
    )
}