import React, { useState, useEffect } from 'react';

function Timer(){
    //console.log('call function')
    const [count, setCount] = useState(0);
   // console.log(count)

    useEffect(() => {
        setInterval(() => {
            //console.log('useEffect')
            setCount(prevCount => prevCount + 1);
        }, 1000)
        return(
            clearInterval(count)
        )
    })

    //console.log("render");
    return (
    <h2>You have used {count} seconds on this website</h2>
    );

}
 export default Timer;