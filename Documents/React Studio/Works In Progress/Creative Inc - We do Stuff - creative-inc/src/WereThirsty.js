import React, { Component } from 'react';
import './App.css';
import img_elAidanmeyer129855 from './images/WereThirsty_elAidanmeyer129855_665570.jpg';


export default class WereThirsty extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_aidanmeyer129855 = {
        backgroundImage: 'url('+img_elAidanmeyer129855+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_rectangle = {
        background: 'rgba(254, 255, 255, 0.500)',
     };
    const style_rectangle_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="WereThirsty" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
          <div className='containerMinHeight elAidanmeyer129855' style={style_aidanmeyer129855} />
        </div>
        <div className="layoutFlow">
          <div className='elRectangle' style={style_rectangle_outer}>
            <div style={style_rectangle} />
          
          </div>
          
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.werethirsty_text_422311}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
