import React from 'react';
import './view.css';


const View = (props) => {


    function dragText() {
      let elmnt = document.querySelector('.banner__text');
      let border = document.querySelector('.move-text');
      
          if ( border.style.display !== 'none') {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (elmnt && border) {
            border.onmousedown = dragMouseDown;
          } else {
            border.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            if (border.style.display !== 'none') {
            border.style.cursor = 'grabbing';
            e = e || window.event;
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            border.style.top = (border.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            border.style.left = (border.offsetLeft - pos1) + "px";
          } else {
            document.onmouseup = null;
            document.onmousemove = null;
          }
          }
        
          function closeDragElement() {
            border.style.cursor = 'pointer';
            document.onmouseup = null;
            document.onmousemove = null;
          }
        }

  } 

    return (
        <div className="view">
            <div className="banner" style={{
                width: props.state.width,  
                height: props.state.height,
                backgroundColor: props.state.color,
                backgroundImage:' url('+props.state.background+')',
                borderRadius: props.state.angle,
                backgroundPosition: props.state.backgroundPosition,
                backgroundRepeat: props.state.backgroundRepeat
                }}>
                <textarea type="text" className="banner__text" style={{fontSize: props.state.textSize, color: props.state.textColor, fontFamily: props.state.font }} defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin convallis nulla, ut blandit ipsum varius eu. Praesent accumsan dapibus diam, ac auctor dui. Donec ultricies elit sit amet magna imperdiet viverra. Praesent tristique dolor nulla, lacinia sollicitudin velit pharetra a. Nullam tempus erat id ante tempor sollicitudin. Morbi accumsan ullamcorper nisi, vel mattis justo maximus et. Morbi dignissim lacus vel justo ullamcorper tincidunt. Vivamus et mauris scelerisque, volutpat ex non, accumsan libero. Nam aliquet sagittis velit et dapibus. Pellentesque ut magna turpis. Suspendisse dignissim, lorem sed volutpat efficitur, leo mi tempus nunc, nec sollicitudin orci ante ut magna. Duis turpis orci, dapibus vitae condimentum eget, varius eget felis."/>
                <div className="move-text" onMouseEnter={()=>{dragText()}} style={{cursor: 'pointer', display: props.state.moveMode}}>=</div>
            </div>
        </div>
    )
};

export default View;