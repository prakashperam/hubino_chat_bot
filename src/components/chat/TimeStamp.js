import React from 'react';


const TimeStamp = ()=>{
    const currentTime = new Date()
    return (
        <>
            <span>{currentTime.getHours()}:</span><span>{currentTime.getMinutes()}</span>
        </>
    )
}
export default TimeStamp