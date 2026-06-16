import { useEffect, useState } from "react";
import './Footer.css'
import { FaCross } from "react-icons/fa";


const Footer = () => {

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
        clearInterval(interval);
    };
    }, []);

    const date = new Date(time);
    const showDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    const showTime = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div>
                    <FaCross /> <p>soli deo gloria</p>
                </div>
            </div>
            <div className="footer-top-right">
                <p>But he said to me, <span>“My grace is sufficient for you, for my power is made perfect in weakness.”</span> Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. <br />
                    2 Corinthians 12:9</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                01/21/2025 - {showDate}
            </p>
            <div className="footer-bottom-right">
                <p>{showTime}</p>
                <p>made with react + vite + mald</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
