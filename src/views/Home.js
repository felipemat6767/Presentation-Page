import React from 'react'
import { Description } from '../components/Description';

import Infoandvideo from '../components/infoandvideo';
import { Intro } from '../components/Intro';
import Objectives from '../components/objectives';
import Videosegment from '../components/videosegment';


export const Home = () => {
    return (
        <div>
            <Intro />
            <Objectives />
            <Description />
            <Infoandvideo />
            <Videosegment />
        </div>
    )
}
