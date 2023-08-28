
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

export default function Arrow({ direction, form }) {

    function displayArrow(deg) {
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

    return (<>
        {displayArrow(direction)}
    </>)
}