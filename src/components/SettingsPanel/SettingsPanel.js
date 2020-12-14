import React, { useState } from 'react';
import './settings-panel.css';
import { SketchPicker } from 'react-color';

const SettingsPanel = (props) => {
    
    const [display, setDisplay] = useState(false);
    const [color, setColor] = useState(props.state.color);

    const cpStyles = {
        default: {
            picker: {
                position: 'absolute',
                width: '70%',
                left: '100%',
                display: `${display}`,
            }
        }
    }

    const fonts = [
        `'Roboto', sans-serif`,
        `'Open Sans Condensed', sans-serif`,
        `'Lato', sans-serif`,
        `'Bebas Neue', cursive`
    ]
    const repeatValues = [
        'repeat',
        'no-repeat'
    ]
    
    return(
        <>
        <div className={`settings-panel ${props.visibility}`}>
            <span className="settings-panel__hs">Size</span>   
            <div className="size-params">
                <div className="width-height-params">
                    <span className="width-block">W:</span><input type="text"  className="width-value" defaultValue={props.state.width} onChange= {(event)=>{props.changeWidth(event.target.value)}}/>
                    <span className="height-block">H:</span><input type="text" className="height-value" defaultValue={props.state.height} onChange= {(event)=>{props.changeHeight(event.target.value)}}/> 
                </div>
                <div className="angle-params">   
                    <span className="angle-block"><img src="img/angle.png"/>: </span><input className="angle-value" defaultValue={props.state.angle} onChange= {(event)=>{props.changeAngle(event.target.value)}}/>
                </div> 
            </div>
            <div className="settings-color">
            <span className="settings-panel__hs">Color</span>
                <div className="color-picker-area">
                    <img className="color-picker" src="img/color-picker.svg" onClick={()=>{setDisplay(!display)}}/>
                    {display && <SketchPicker styles={cpStyles} color={color} onChange={(newColor)=>{props.changeColor(color) ; setColor(newColor.hex)}}/>}
                </div>
                <input type="text" className="color-params" defaultValue={color} onChange={(event)=>{props.changeColor(event.target.value); setColor(event.target.value)}}/>
            </div>
            <span className="settings-panel__hs">Text</span>
            <div className="text-params">
                <div className="font-style-block">
                    <span>Font:</span>
                    <select onChange={(event)=>{props.changeFont(event.target.value)}} className="font-style-form" name="menu" size="1">
                    {fonts.map((item)=> <option value={item}>{item}</option>
                    )}
                    </select>
                </div>
                <span className="font-size-block">Size:</span><input type="text" className="text-value" defaultValue={props.state.textSize} onChange= {(event)=>{props.changeTextSize(event.target.value)}}/>
                <span className="font-size-block">Color:</span><input type="text" className="text-value" defaultValue={props.state.textColor} onChange= {(event)=>{props.changeTextColor(event.target.value)}}/>
            </div>
            <span className="settings-panel__hs">Background-image</span>
            <div className="background-params">
                <div className="background-repeat-block">
                    <span>Repeat:</span>
                    <select onChange={(event)=>{props.changeBackgroundRepeat(event.target.value)}} className="repeat-style-form" name="menu" size="1">
                    {repeatValues.map((item)=> <option value={item}>{item}</option>
                    )}
                    </select>
                </div>
                <span className="background-style-block">Left Top:</span><input style={{width: '50%'}} type="text" className="text-value" defaultValue={props.state.backgroundPosition} onChange= {(event)=>{props.changeBackgroundPosition(event.target.value)}}/>
            </div>
        </div>
        </>
    )
};

export default SettingsPanel;