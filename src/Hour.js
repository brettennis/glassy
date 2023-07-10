import './Hour.css'

export default function Hour({ hourdata }) {
    let date        = new Date(hourdata?.time)

    let f_temp      = Math.floor(hourdata?.airTemperature.sg * 9 / 5 + 32)
    let f_cloud     = Math.floor(hourdata?.cloudCover.sg)
    let f_gust      = Math.floor(hourdata?.gust.sg           * 2.237)
    let f_precip    = Math.ceil( hourdata?.precipitation.sg  / 25.4)
    let f_swell_dir =            hourdata?.swellDirection.sg
    let f_swell_hgt = Math.ceil( hourdata?.swellHeight.sg    * 3.281)
    let f_swell_per = Math.floor(hourdata?.swellPeriod.sg)
    let f_wind_dir  =            hourdata?.windDirection.sg
    let f_wind_spd  = Math.floor(hourdata?.windSpeed.sg      * 2.237)

    let f_day = date.toLocaleString("en-us", {
        weekday: "short",
    })
    let f_time = date.toLocaleString("en-us", {
        timeStyle: "short"
    })

    return (
        <div className='row'>
            <p>{f_day} {f_time}</p>

            {/* <p>{f_temp}°</p>
            <p>Precipitation: {f_precip}in</p>
            <p>Cloud Cover:{f_cloud}%</p>
            <p>Wind Gust: {f_gust}mph</p> */}
        
            <div className='data'>
                <div>{f_wind_dir}</div>
                <div>{f_wind_spd}mph</div>
                <div>{f_swell_dir}</div>
                <div>{f_swell_hgt}ft</div>
                <div>{f_swell_per}s</div>
            </div>
        </div>
    )
}

// {"airTemperature":{"noaa":25.84,"sg":25.84},
// "cloudCover":{"noaa":73.4,"sg":73.4},
// "gust":{"noaa":3.34,"sg":3.34},
// "precipitation":{"noaa":0.33,"sg":0.33},
// "swellDirection":{"icon":155.78,"noaa":145.46,"sg":155.78},
// "swellHeight":{"icon":0.28,"noaa":0.47,"sg":0.28},
// "swellPeriod":{"icon":6.88,"noaa":7.02,"sg":6.88},
// "time":"2023-07-09T00:00:00+00:00",
// "windDirection":{"icon":187.55,"noaa":179.01,"sg":187.55},
// "windSpeed":{"icon":1.75,"noaa":1.76,"sg":1.75}}