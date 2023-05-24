// component to render the header section of the application
import React from 'react';
import Calc from './calculator';

function Header() {
    return (
	<div className='header'>
        <div className='CalcDecor'>
            <h1>Body Mass Index Calculator</h1>
            <p>Better understand your weight in relation to your height 
                with our body mass index calculator(BMI). 
                While BMI is not the sole determinant of a healtht body weight, 
                it offers a valuable starting point to 
                evaluate your overall health and well-being
            </p>
        </div>
        <Calc></Calc>
    </div>
    );
}

export default Header;
