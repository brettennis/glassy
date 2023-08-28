import Arrow from "./Arrow.js";
import './Hour.css';

export default function Hour({ hourdata }) {
    let date        = new Date(hourdata?.time);

    let f_temp      = Math.floor(hourdata?.airTemperature.sg * 9 / 5 + 32)
    // let f_cloud     = Math.floor(hourdata?.cloudCover.sg)
    // let f_gust      = Math.floor(hourdata?.gust.sg           * 2.237)
    // let f_precip    = Math.ceil( hourdata?.precipitation.sg  / 25.4)
    let f_swell_dir =            hourdata?.swellDirection.sg;
    let f_swell_hgt = Math.round(hourdata?.swellHeight.sg    * 32.8) / 10;
    let f_swell_per = Math.floor(hourdata?.swellPeriod.sg);
    let f_wind_dir  =            hourdata?.windDirection.sg;
    let f_wind_spd  = Math.floor(hourdata?.windSpeed.sg      * 2.237);

    let f_time = date.toLocaleString("en-us", {
        timeStyle: "short",
    })

    function displayStack(metric, label) {
        return (
            <div className='label-stack'>
                <div className='metric'>{metric}</div> 
                <div className='label'>{label}</div>
            </div>
        );
    }

    return (
        <div className='row'>

            <div className='block0'>
                <div className='block0-time'>
                    {f_time}
                </div>
                <div className='block0-temp'>
                    {f_temp}°
                </div>
            </div>

            <div className='block1'>
                {/* <div className='block1-label'>
                    Swell
                </div> */}
                <div className='block1-height'>
                    <div>{displayStack(f_swell_hgt.toFixed(1), "ft")}</div>
                    <div>{f_swell_per}s</div>
                    <Arrow direction={f_swell_dir} form={true} />
                </div>
            </div>

            <div className='block2'>
                {displayStack(f_wind_spd, 'mph')}
                <Arrow direction={f_wind_dir} form={false} />
            </div>

            {/* <p>{f_temp}°</p>
            <p>Precipitation: {f_precip}in</p>
            <p>Cloud Cover:{f_cloud}%</p>
            <p>Wind Gust: {f_gust}mph</p> */}
        </div>
    );
}