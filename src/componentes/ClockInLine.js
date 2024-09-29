import React, {useState, useEffect} from 'react';

const ClockInLine = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());

    useEffect( () => {
        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <>{clock}</>
}

export default ClockInLine;