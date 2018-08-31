import React, { Component } from 'react';
import './App.css';
import img_elLogowhite from './images/Logo_elLogowhite_200495.png';


export default class Logo extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(35, 40, 52, 1.000)',
        pointerEvents: 'none',
     };
    const style_logowhite = {
        backgroundImage: 'url('+img_elLogowhite+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_rectangle = {
        background: 'rgba(254, 255, 255, 1.000)',
        display: 'none',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Logo" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="foreground">
          <div className='elLogowhite' style={style_logowhite} />
          <div className='elRectangle' style={style_rectangle} />
        </div>
      </div>
    )
  }
  

}
