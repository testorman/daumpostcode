import React, { Component } from 'react';
import './App.css';


export default class WhatWeDo extends Component {

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
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_spacer = {
        background: 'rgba(255, 255, 255, 0.000)',
     };
    const style_spacer_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="WhatWeDo" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.whatwedo_text_813963}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.whatwedo_textcopy_755616}</div>
            </div>
          
          </div>
          
          <div className='elSpacer' style={style_spacer_outer}>
            <div style={style_spacer} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
