import './Current.css';

export default function Current({ hourdata }) {

	let f_temp_F    = Math.floor(hourdata?.airTemperature.sg * 9 / 5 + 32)
    // let f_cloud     = Math.floor(hourdata?.cloudCover.sg)
    // let f_gust_mph  = Math.floor(hourdata?.gust.sg           * 2.237)
    // let f_precip_in = Math.ceil( hourdata?.precipitation.sg  / 25.4)
    // let f_swell_dir =            hourdata?.swellDirection.sg;
    let f_swell_card= toCardinal(hourdata?.swellDirection.sg);
    let f_swell_ft  = Math.round(hourdata?.swellHeight.sg    * 32.8) / 10;
    let f_swell_per = Math.floor(hourdata?.swellPeriod.sg);
    // let f_wind_dir  =            hourdata?.windDirection.sg;
    let f_wind_card = toCardinal(hourdata?.windDirection.sg);
    let f_wind_mph  = Math.floor(hourdata?.windSpeed.sg      * 2.237);

    function toCardinal(deg) {
        if        (deg >= 338 || deg < 23 ) { return ("N");
        } else if (deg >= 23  && deg < 68 ) { return ("NE");
        } else if (deg >= 68  && deg < 113) { return ("E");
        } else if (deg >= 113 && deg < 158) { return ("SE");
        } else if (deg >= 158 && deg < 203) { return ("S");
        } else if (deg >= 203 && deg < 248) { return ("SW");
        } else if (deg >= 248 && deg < 293) { return ("W");
        } else if (deg >= 203 && deg < 338) { return ("NW");
        }
    }

	return (
		<div className='current'>

            <h5 style={{margin: "1rem 5rem 1rem"}}>Current Conditions</h5>

            <div className='current-block'>

                <div className='temp'>
                    <h6>Air Temp</h6>
                    <h3>{f_temp_F}°</h3>
                </div>

                <div className='swell'>
                    <h6>Swell</h6>
                    <h4>{f_swell_card} {f_swell_ft}ft @ {f_swell_per}s</h4>
                    {/* <h5>{f_swell_card}</h5> */}
                </div>
                
                <div className='wind'>
                    <h6>Wind</h6>
                    <h4>{f_wind_card} {f_wind_mph}mph</h4>
                    {/* <h5>{f_wind_card}</h5> */}
                </div>

            </div>
		</div>
	)
}