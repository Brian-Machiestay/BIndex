// component to render the header section of the application
import React from 'react';
import Calc from './calculator';

function Header() {
    return (
	<div className='header'>
        <div className='CalcDecor'></div>
        <Calc></Calc>
    </div>
    );
}

export default Header;
