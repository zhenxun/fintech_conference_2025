import { useEffect, useState } from 'react';

function Cover() {
    const targetDate = '2025-11-13T09:00:00';
    return(
        <div style={{position: "relative",height: "850px",overflow: "hidden"}}>
            <video autoPlay muted loop playsInline  style={{position: "absolute",top: "0",left: "0",width: "100%",height:" 100%",objectFit:'cover',zIndex: "-1"}}>
                <source src="/assets/video/video1.webm" type="video/mp4" />
            </video>
            <div style={{backgroundColor: "rgba(0,0,0,0.5)",height: "100%"}} className="d-flex align-items-center text-light">
                <div className='px-3' style={{maxWidth:'90%'}}>
                    <div className="title-large">2025</div>
                    <div className="title-xlarge">The 6th International Conference on Responsible Finance and ESG Management</div>
                    <div style={{color:'darkgrey'}}>
                    <div className="title-medium mt-5">2025-11-13 in NCKU</div>
                    <div className="title-medium"><CountdownTimer targetDate={targetDate} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const endTime = new Date(targetDate).getTime();
        const now = Date.now();
        const remainingTime = Math.max(0, endTime - now);
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        return { days, hours, minutes, seconds };
    }

    return (
        <div>
            {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
        </div>
    );
}

export default Cover;