import './Footer.css';

import GitHubIcon from './icons/github-mark-white.svg';

export default function Footer() {
    return (<>

        <div className='footer'>
            <a href='https://github.com/brettennis'>
                <img src={GitHubIcon} style={{width: "2rem"}} alt='github.com/brettennis'/>
            </a>
            Created by Brett Ennis
        </div>
    
    </>)
}