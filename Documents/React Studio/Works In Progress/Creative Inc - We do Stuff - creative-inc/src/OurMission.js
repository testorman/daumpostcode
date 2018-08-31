import React, { Component } from 'react';
import './App.css';


export default class OurMission extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(35, 38, 50, 1.000)',
        pointerEvents: 'none',
     };
    const style_textBlock = {
        fontSize: 30.1,
        color: '#feffff',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="OurMission" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="foreground">
          <div className='font-AppleSystemUIFont  elTextBlock' style={style_textBlock}>
            <div>{this.props.locStrings.ourmission_textblock_401318}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
