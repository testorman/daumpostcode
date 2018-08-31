import React, { Component } from 'react';
import './App.css';


export default class OurTeam extends Component {

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
    const style_textBlock = {
        fontSize: 30.1,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="OurTeam" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="foreground">
          <div className='font-AppleSystemUIFont  elTextBlock' style={style_textBlock}>
            <div>{this.props.locStrings.ourteam_textblock_1002658}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
