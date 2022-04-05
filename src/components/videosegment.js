import React, { useEffect, useState } from 'react'

const current = new Date();
const result = current.toUTCString();
console.log(result);
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const hour = current.getHours()
let minutes = current.getMinutes();
minutes = minutes <= 9 ? '0' + minutes : minutes;


const Videosegment = () => {
    const [time, settime] = useState()
    useEffect(() => {
        settime(hour + ":" + minutes)
    }, [time])
    
   
    return (
        <div className='mt-4 videoelement '>
            <h2 className='pt-4 title-video-description'>Watch and learn</h2>
            <p className='text-video-description'>ALorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe width="403" height="200" src="https://www.youtube.com/embed/wtQBQDaE4Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
        </div>
    )
}

export default Videosegment