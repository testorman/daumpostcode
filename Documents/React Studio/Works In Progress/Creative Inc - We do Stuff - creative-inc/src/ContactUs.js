import React, { Component } from 'react';
import './App.css';
import img_elBG from './images/ContactUs_elBG_957770.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ContactUs extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      emailField: '',
    };
  }

  textInputChanged_emailField = (event) => {
    this.setState({emailField: event.target.value});
  }
  
  onClick_elSendButton = (ev) => {
    alert("Sorry but this is just a demo so your email address was not sent to anyhere");
    
    
    
    
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_bG = {
        backgroundImage: 'url('+img_elBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_emailField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: '#feffff',
     };
    const style_sendButton = {
        display: 'block',
        textAlign: 'center',
        backgroundColor: '#242524',
        textTransform: 'none',
        cursor: 'pointer',
     };
    const style_header = {
        fontSize: 19.4,
        color: '#feffff',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="ContactUs" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBG' style={style_bG} />
        </div>
        <div className="foreground">
          <input className='baseFont elEmailField' style={style_emailField} type="email" placeholder={this.props.locStrings.contactus_emailfield_625829} onChange={this.textInputChanged_emailField} defaultValue={this.state.emailField}  />
          <Button className='actionFont elSendButton' style={style_sendButton}  onClick={this.onClick_elSendButton} >
            {this.props.locStrings.contactus_sendbutton_558898}
          </Button>
          <div className='font-AppleSystemUIFont  elHeader' style={style_header}>
            <div>{this.props.locStrings.contactus_header_35473}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
