import React, { useState, useEffect } from 'react';

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(()=>{
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return clearTimeout(count);
    }, [count])

return <p> You have used {count} seconds</p>;
}

export default Timer;