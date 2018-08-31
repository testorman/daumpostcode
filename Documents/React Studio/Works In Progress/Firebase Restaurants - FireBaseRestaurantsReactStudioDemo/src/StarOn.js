import React, { Component } from 'react';
import './App.css';
import btn_icon_896640 from './images/btn_icon_896640.png';


export default class StarOn extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_iconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_896640+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    
    return (
      <div className="StarOn" style={baseStyle}>
        <div className="compContent">
          <button className='actionFont containerMinHeight elIconButton' style={style_iconButton}   />
        </div>
      </div>
    )
  }
  

}
