import React, { useState, useEffect } from 'react';

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)
        return(
            clearTimeout(count)
        )
    })

    return (
    <h2>You have used {count} seconds on this website</h2>
    );

}
 export default Timer;