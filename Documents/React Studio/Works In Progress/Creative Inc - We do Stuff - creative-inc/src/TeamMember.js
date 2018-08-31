import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/TeamMember_elRoundimage_812940.png';


export default class TeamMember extends Component {

  // Properties used by this component:
  // name, description, image

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_roundimage = {
        backgroundImage: 'url('+(this.props.image || img_elRoundimage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_roundimage_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text = this.props.name;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_textCopy = this.props.description;
    
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_spacer = {
        background: 'rgba(254, 255, 255, 1.000)',
     };
    const style_spacer_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="TeamMember" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='elRoundimage' style={style_roundimage_outer}>
            <div style={style_roundimage} />
          
          </div>
          
          <div className='font-AppleSystemUIFont  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.teammember_text_1015414}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.teammember_textcopy_404214}</span>)}</div>
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
