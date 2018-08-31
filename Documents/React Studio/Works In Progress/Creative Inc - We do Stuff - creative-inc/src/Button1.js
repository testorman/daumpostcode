import React, { Component } from 'react';
import './App.css';


export default class Button1 extends Component {

  // Properties used by this component:
  // title, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_title = {
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const value_title = this.props.title;
    
    
    return (
      <div className="Button1" style={baseStyle}>
        <div className="compContent">
          <div className='baseFont state0_elTitle' style={style_title}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.button1_title_517545}</span>)}</div>
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
    
    const style_title = {
        color: '#0093d5',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const value_title = this.props.title;
    
    const style_selectionMarker = {
        background: 'rgba(58, 168, 255, 1.000)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Button1" style={baseStyle}>
        <div className="compContent">
          <div className='baseFont state1_elTitle' style={style_title}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.button1_title_19881}</span>)}</div>
          </div>
          <div className='state1_elSelectionMarker' style={style_selectionMarker} />
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
