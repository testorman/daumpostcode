import React, { Component } from 'react';
import './App.css';
import img_elYouTube from './images/SocialLinks_elYouTube_237495.png';
import img_elInstagram from './images/SocialLinks_elInstagram_1043157.png';
import img_elSnapchat from './images/SocialLinks_elSnapchat_261002.png';
import img_elFacebook from './images/SocialLinks_elFacebook_978545.png';


export default class SocialLinks extends Component {

  // This component doesn't use any properties

  onClick_elYouTube = (ev) => {
    window.open('https://www.youtube.com/channel/UCrcoH14H-MLS-MKxZGMwVGQ/', '_blank');
  
  }
  
  
  onClick_elInstagram = (ev) => {
    window.open('https://www.instagram.com/neonto.studio/', '_blank');
  
  }
  
  
  onClick_elSnapchat = (ev) => {
    window.open('https://twitter.com/neontostudio', '_blank');
  
  }
  
  
  onClick_elFacebook = (ev) => {
    window.open('https://www.facebook.com/neontostudio', '_blank');
  
  }
  
  
  onClick_elLink = (ev) => {
    window.open('https://neonto.com', '_blank');
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_youTube = {
        height: 'auto',
        cursor: 'pointer',
     };
    const style_instagram = {
        height: 'auto',
        cursor: 'pointer',
     };
    const style_snapchat = {
        height: 'auto',
        cursor: 'pointer',
     };
    const style_facebook = {
        height: 'auto',
        cursor: 'pointer',
     };
    const style_copyright = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    // eslint-disable-next-line no-unused-vars
    const style_copyright_inner = {
        textAlign: 'center',
     };
    const style_link = {
        display: 'block',
        backgroundColor: 'transparent',
        cursor: 'pointer',
     };
    const style_credits = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="SocialLinks" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="foreground">
          <img className='elYouTube' style={style_youTube} src={img_elYouTube} alt="" onClick={this.onClick_elYouTube}  />
          <img className='elInstagram' style={style_instagram} src={img_elInstagram} alt="" onClick={this.onClick_elInstagram}  />
          <img className='elSnapchat' style={style_snapchat} src={img_elSnapchat} alt="" onClick={this.onClick_elSnapchat}  />
          <img className='elFacebook' style={style_facebook} src={img_elFacebook} alt="" onClick={this.onClick_elFacebook}  />
          <div className='baseFont elCopyright' style={style_copyright}>
            <div className="bottomAlignedContent">{this.props.locStrings.sociallinks_copyright_1021741}</div>
          </div>
          <div className='actionFont elLink' style={style_link}  onClick={this.onClick_elLink}  />
          <div className='baseFont elCredits' style={style_credits}>
            <div>{this.props.locStrings.sociallinks_credits_869374}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
