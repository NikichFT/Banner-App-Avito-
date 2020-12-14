import React from 'react';
import './colorPicker.css';
 	
const ColorPicker = () => {
           
    return(
    <>
    <div className="picker" id="primary_block" >
        <div id="line">
        <div id="arrows">
        <div className="left_arrow"></div>
        <div className="right_arrow"></div>
        </div>
    </div>
    <div id="block_picker">
        <img src="img/bgGradient.png" className="bk_img"/><div id="circle"></div>
    </div>
    <div id="out_color" className="out_color"></div>
    </div>
    </>
    )
}

export default ColorPicker;
