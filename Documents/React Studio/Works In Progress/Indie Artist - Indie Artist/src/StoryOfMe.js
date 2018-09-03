import React, { Component } from 'react';
import './App.css';
import img_elTrumpet from './images/StoryOfMe_elTrumpet_284727.jpg';


export default class StoryOfMe extends Component {

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
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_trumpet = {
        backgroundImage: 'url('+img_elTrumpet+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_trumpet_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="StoryOfMe" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elTextBlock' style={style_textBlock_outer}>
            <div style={style_textBlock}>
              <div>{this.props.locStrings.storyofme_textblock_356422}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.storyofme_text_424913}</div>
            </div>
          
          </div>
          
          <div className='elTrumpet' style={style_trumpet_outer}>
            <div style={style_trumpet} />
          
          </div>
          
          <div className='baseFont elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.storyofme_textcopy_767796.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
