import React, { Component } from 'react';
import './App.css';


export default class Slogantop extends Component {

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
    const style_text = {
        fontSize: 30.1,
        color: '#feffff',
        textAlign: 'center',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        fontSize: 36.6,
        color: '#feffff',
        textAlign: 'center',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Slogantop" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='font-openSans  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.slogantop_text_12307}</div>
            </div>
          
          </div>
          
          <div className='font-AppleSystemUIFont  elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.slogantop_textcopy_323518}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
