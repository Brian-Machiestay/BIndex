import React from "react";
import Healthy from "./healthy";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCutlery, faBicycle, faBed } from '@fortawesome/free-solid-svg-icons';

library.add(faCutlery, faBicycle, faBed);

function HealthTips () {
    const tip1 = {
        name : 'foodie',
        icon: <FontAwesomeIcon icon={ faCutlery } size="2x"></FontAwesomeIcon>,
        text: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity and mood',
        title: 'Healthy eating',
        iconName: 'food',
    };
    const tip2 = {
        name: 'exercise',
        icon: <FontAwesomeIcon icon={ faBicycle } size="2x" ></FontAwesomeIcon>,
        text: 'Exercise improves fitness, aids weight control, elevates mood and reduces disease risk, fostering wellness and longivity',
        title: 'Regular exercise',
        iconName: 'exercise-healthy',
    }

    const tip3 = {
        name: 'sleep',
        icon: <FontAwesomeIcon icon= { faBed } size="2x"></FontAwesomeIcon>,
        text: 'Sleep enhances mental clarity, emotional stability and physical wellness, promoting overall restoration and rejuvenation',
        title: 'Adequate sleep',
        iconName: 'sleep-healthy'

    }

    return (
        <div className="health-tips">
            <Healthy { ...tip1 } ></Healthy>
            <Healthy { ...tip2 } ></Healthy>
            <Healthy { ...tip3 } ></Healthy>
        </div>
    )
}

export default HealthTips;