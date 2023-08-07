import './Hour.css';

import Arrow1e  from './icons/arrow1-e.svg';
import Arrow1n  from './icons/arrow1-n.svg';
import Arrow1ne from './icons/arrow1-ne.svg';
import Arrow1nw from './icons/arrow1-nw.svg';
import Arrow1s  from './icons/arrow1-s.svg';
import Arrow1se from './icons/arrow1-se.svg';
import Arrow1sw from './icons/arrow1-sw.svg';
import Arrow1w  from './icons/arrow1-w.svg';

import Arrow2e  from './icons/arrow2-e.svg';
import Arrow2n  from './icons/arrow2-n.svg';
import Arrow2ne from './icons/arrow2-ne.svg';
import Arrow2nw from './icons/arrow2-nw.svg';
import Arrow2s  from './icons/arrow2-s.svg';
import Arrow2se from './icons/arrow2-se.svg';
import Arrow2sw from './icons/arrow2-sw.svg';
import Arrow2w  from './icons/arrow2-w.svg';


export default function Hour({ hourdata }) {
    let date        = new Date(hourdata?.time);

    // let f_temp      = Math.floor(hourdata?.airTemperature.sg * 9 / 5 + 32)
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

    function displayArrow(deg, form) {
        if        (deg >= 338 || deg < 23 ) {
            return (form ? <img src={Arrow1n } className='arrow1' alt=''/> 
                         : <img src={Arrow2n } className='arrow2' alt=''/>);
        } else if (deg >= 23  && deg < 68 ) {
            return (form ? <img src={Arrow1ne} className='arrow1' alt=''/> 
                         : <img src={Arrow2ne} className='arrow2' alt=''/>);
        } else if (deg >= 68  && deg < 113) {
            return (form ? <img src={Arrow1e } className='arrow1' alt=''/> 
                         : <img src={Arrow2e } className='arrow2' alt=''/>);
        } else if (deg >= 113 && deg < 158) {
            return (form ? <img src={Arrow1se} className='arrow1' alt=''/> 
                         : <img src={Arrow2se} className='arrow2' alt=''/>);
        } else if (deg >= 158 && deg < 203) {
            return (form ? <img src={Arrow1s } className='arrow1' alt=''/> 
                         : <img src={Arrow2s } className='arrow2' alt=''/>);
        } else if (deg >= 203 && deg < 248) {
            return (form ? <img src={Arrow1sw} className='arrow1' alt=''/> 
                         : <img src={Arrow2sw} className='arrow2' alt=''/>);
        } else if (deg >= 248 && deg < 293) {
            return (form ? <img src={Arrow1w } className='arrow1' alt=''/> 
                         : <img src={Arrow2w } className='arrow2' alt=''/>);
        } else if (deg >= 203 && deg < 338) {
            return (form ? <img src={Arrow1nw} className='arrow1' alt=''/> 
                         : <img src={Arrow2nw} className='arrow2' alt=''/>);
        }
    }

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
            <div className='block1'>
                <div className='block1-time'>
                    {f_time}
                </div>
                <div className='block1-height'>
                    <div>{displayStack(f_swell_hgt.toFixed(1), "ft")}</div>
                    <div>{f_swell_per}s</div>
                </div>
                <div className='block1-arrow'>
                    {displayArrow(f_swell_dir, true)}
                </div>
            </div>

            <div className='block2'>
                {displayStack(f_wind_spd, "mph")}
                {displayArrow(f_wind_dir, false)}
            </div>

            {/* <p>{f_temp}°</p>
            <p>Precipitation: {f_precip}in</p>
            <p>Cloud Cover:{f_cloud}%</p>
            <p>Wind Gust: {f_gust}mph</p> */}
        </div>
    );
}