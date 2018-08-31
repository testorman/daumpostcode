import React, { Component } from 'react';
import './App.css';


export default class HowWeDoIt extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(35, 39, 51, 1.000)',
        pointerEvents: 'none',
     };
    const style_text = {
        color: '#feffff',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: '#feffff',
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
      <div className="HowWeDoIt" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.howwedoit_text_381730}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.howwedoit_textcopy_850462}</div>
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
