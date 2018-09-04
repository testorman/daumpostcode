import React, { Component } from 'react';
import './App.css';
import img_state1_elImage from './images/Grid_elImage_519339.jpg';


export default class Component1 extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_textCopy = {
        fontSize: 12.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'white',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component1" style={baseStyle}>
        <div className="compContent">
          <div className='state0_elTextCopy' style={style_textCopy}>
            <div>{this.props.locStrings.component1_text_466302}</div>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_image = {
        backgroundImage: 'url('+img_state1_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        borderRadius: '11.3px',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 8.6,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'white',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Component1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='state1_elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='state1_elText' style={style_text}>
            <div>{this.props.locStrings.component1_text_407997}</div>
          </div>
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
