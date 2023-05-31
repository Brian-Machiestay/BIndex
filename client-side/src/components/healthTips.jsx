import React from "react";
import Healthy from "./healthy";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCutlery, faBicycle, faBed } from '@fortawesome/free-solid-svg-icons';

library.add(faCutlery, faBicycle, faBed);

function HealthTips () {
    const tip1 = {
        name : 'foodie',
        icon: <FontAwesomeIcon icon={ faCutlery }></FontAwesomeIcon>,
        text: 'Healthy eating promotes weight control, disease prevention, \
        better digestion, immunity, mental clarity and mood'
    };
    const tip2 = {
        name: 'exercise',
        icon: <FontAwesomeIcon icon={ faBicycle } ></FontAwesomeIcon>,
        text: 'Exercise improves fitness, aids weight control, \
        elevates mood and reduces disease risk, fostering wellness and longivity'
    }

    const tip3 = {
        name: 'sleep',
        icon: <FontAwesomeIcon icon= { faBed } ></FontAwesomeIcon>,
        text: 'Sleep enhances mental clarity, emotional stability \
        and physical wellness, promoting overall restoration and rejuvenation'
    }

    return (
        <>
            <Healthy { ...tip1 } ></Healthy>
            <Healthy { ...tip2 } ></Healthy>
            <Healthy { ...tip3 } ></Healthy>
        </>
    )
}

export default HealthTips;