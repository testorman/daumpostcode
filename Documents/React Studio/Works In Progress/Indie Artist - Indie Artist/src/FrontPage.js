import React, { Component } from 'react';
import './App.css';
import img_elArtistMainPicBw from './images/FrontPage_elArtistMainPicBw_114248.jpg';


export default class FrontPage extends Component {

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
    const style_artistMainPicBw = {
        backgroundImage: 'url('+img_elArtistMainPicBw+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_textBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="FrontPage" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="foreground">
          <div className='containerMinHeight elArtistMainPicBw' style={style_artistMainPicBw} />
          <div className='headlineFont elTextBlock' style={style_textBlock}>
            <div>{this.props.locStrings.frontpage_textblock_928127}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
