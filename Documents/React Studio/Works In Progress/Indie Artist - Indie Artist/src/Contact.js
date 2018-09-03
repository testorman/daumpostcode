import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Contact extends Component {

  // This component doesn't use any properties

  onClick_elButton = (ev) => {
    window.open('mailto:indieartist@example.com', '_blank');
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
    window.open('https://www.google.com/maps/place/321+Hayes+St,+San+Francisco,+CA+94102/@37.7770317,-122.4240188,17z/data=!4m13!1m7!3m6!1s0x80858098dc9c89ef:0xb663df284ee1578e!2s321+Hayes+St,+San+Francisco,+CA+94102!3b1!8m2!3d37.7770317!4d-122.4218248!3m4!1s0x80858098dc9c89ef:0xb663df284ee1578e!8m2!3d37.7770317!4d-122.4218248?hl=en', '_blank');
  
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
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_text2 = {
        fontSize: 15.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontStyle: 'italic',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_buttonCopy_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="Contact" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.contact_text_1010756}</div>
            </div>
          
          </div>
          
          <div className='elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{this.props.locStrings.contact_text2_380494}</div>
            </div>
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.contact_button_815456}
            </Button>
          
          </div>
          
          <div className='baseFont elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.contact_textcopy_519705.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='actionFont elButtonCopy' style={style_buttonCopy_outer}>
            <Button style={style_buttonCopy}  color="accent" onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.contact_buttoncopy_845993}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
