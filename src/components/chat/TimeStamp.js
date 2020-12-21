import React from 'react';


const TimeStamp = ()=>{
    const currentTime = new Date()
    return (
        <div>
            <span>{currentTime.getHours()}:</span> <span>{currentTime.getMinutes()}</span>
        </div>
    )
}
export default TimeStamp