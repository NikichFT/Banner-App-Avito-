import React from 'react';
import './toolbar.css';

import {useState} from 'react';
import * as htmlToImage from 'html-to-image';
import {toPng} from 'html-to-image';
import { saveAs } from 'file-saver';


const Toolbar = (props) => {

    const banner = {
        width: props.state.width,
        height: props.state.height,
        color: props.state.color,
        textSize: props.state.textSize,
        textColor: props.state.textColor,
        background: props.state.background,
        font: props.state.font,
        backgroundRepeat: props.state.backgroundRepeat,
        backgroundPosition: props.state.backgroundPosition
    }
    const [urlBlock, setUrlBlock] = useState('none');
    const [exportBlock, setExportBlock] = useState('none');

    const exportHTML = () => {
        let banner = document.querySelector('.view').innerHTML;
        navigator.clipboard.writeText(banner)
            .then((item)=>{
                alert('Copied!')
            })
          .catch(err => {
            alert('Something went wrong', err);
          })
    }
    const exportJSON = () => {
        let paramsJson = JSON.stringify(banner);
        navigator.clipboard.writeText(paramsJson)
            .then((item)=>{
                alert('Copied!')
            })
          .catch(err => {
            alert('Something went wrong', err);
          })
    }

    const exportPng = () => {
        htmlToImage.toBlob(document.querySelector('.banner'))
            .then(function (blob) {
                window.saveAs(blob, 'my-banner.png');
            });
    }

    const upperCase = (T) => {
        const text = document.querySelector('.banner__text');
       if (text.style.textTransform === 'uppercase') 
       {text.style.textTransform = 'none'; T.classList.remove('active')} else {text.style.textTransform = 'uppercase'; T.classList.add('active')};
       
    }

    

    return (
        <>
        <div className="toolbar">
            <div className={`toolbar__tool_settings ${props.visibility === 'visible' ? 'open': ''}`}>
                <img src="img/125623-200.png" className="toolbar-settings-img" alt="" onClick={() => props.visibility === 'hidden' ? props.changeVisibility('visible') : props.changeVisibility('hidden') }/>
            </div>
            <ul className="toolbar__tool_add">
                <li className="tool"><img src="img/cursor.png" onClick={()=> {(props.state.moveMode == 'none') ? props.changeMoveMode('flex') : props.changeMoveMode('none')}} className={`toolbar-cursor-img ${props.state.moveMode === 'flex' ? 'active' : ''}`} alt=""/></li>
                <li className="tool"><img src="img/T.svg" onClick={(event) => {upperCase(event.target)}} className="toolbar-text-img"/></li>
                <li className="tool"><img src="img/add-img.svg" className="toolbar-addimg-img" alt="" onClick={() => urlBlock === 'flex' ? setUrlBlock('none') : setUrlBlock('flex')}/></li>
                <div className="img-url-area" style={{display: urlBlock }}><span>URL or dataURI:</span><input type="text" className="urlArea" defaultValue={props.state.background} onChange={(event)=> props.changeBackground(event.target.value)}/></div>
            </ul>
            <div className="toolbar__tool_export">
                <img src="img/export.svg" className="toolbar-export-img" alt="" onClick={() => exportBlock === 'flex' ? setExportBlock('none') : setExportBlock('flex')}/>
                <div className="export-params" style={{display: exportBlock}}>
                    <div className="toolbar__export-type" onClick={() => exportPng()}>Save PNG</div>
                    <div className="toolbar__export-type" onClick={() => exportHTML()}>Copy HTML</div>
                    <div className="toolbar__export-type" onClick={() => exportJSON()}>Copy JSON</div>
                </div>    
            </div>
        </div>
        </>
    )
};

export default Toolbar;