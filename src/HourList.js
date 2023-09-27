import Hour from "./Hour.js";

export default function HourList({ dataHours }) {

    let morningHours = [];
    for (let i = 0; i < 6; i++) {
        if (dataHours[0]?.time !== undefined) 
            morningHours.push(dataHours[i]);
    }

    // let currentHour = -1;
    // let startHour = 4;
    // let found = false;
    // for (let i = 0; i < 24 && !found; i++) {
    //     currentHour = parseInt(dataHours[i]?.time.slice(11,13)) || -1;
    //     console.log("currentHour: " + currentHour);
    //     if (currentHour === startHour) {
    //         // for (let j = 0; j < 6; j++) {
    //         //     morningHours.push(dataHours[i+j]);
    //         // }
    //         morningHours.push(dataHours[i]);
    //         found = true;
    //         console.log("found" + i)
    //         console.log(dataHours[i]);
    //     }
    // }

    return (
        <div style={{
            marginTop: "0.3rem",
            marginBottom: "1.5rem",
            width: "32rem"
        }}>
            <h5 style={{
                marginBottom: "1rem",
            }}> 
                Hourly Forecast
            </h5>

            <div style={{
                backgroundColor: "#3b444d", 
                paddingTop: "1rem",
                paddingBottom: "0.4rem",
                borderRadius: "1rem"
                }}>

                <div style={{display: "flex"}}>
                    <h6 style={{marginLeft: "2rem"}}>Air Temp</h6>
                    <h6 style={{marginLeft: "6.5rem"}}>Swell</h6>
                    <h6 style={{marginLeft: "8.5rem"}}>Wind</h6>  
                </div>

                {morningHours.map((hour) => (
                    <Hour key={hour.time} hourdata={hour} />
                ))}
            </div>
        </div>
    )
}