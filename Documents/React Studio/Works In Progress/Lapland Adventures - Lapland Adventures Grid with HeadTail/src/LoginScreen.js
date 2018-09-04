import React, { Component } from 'react';
import './App.css';
import img_elBgImage from './images/LoginScreen_elBgImage_421330.jpg';
import img_elTentIcon from './images/LoginScreen_elTentIcon.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      userNameField: '',
      passwordField: '',
    };
  }

  textInputChanged_userNameField = (event) => {
    this.setState({userNameField: event.target.value});
  }
  
  textInputChanged_passwordField = (event) => {
    this.setState({passwordField: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Adventures'
    this.props.appActions.goToScreen('adventures', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_bgImage = {
        backgroundImage: 'url('+img_elBgImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_tentIcon = {
        backgroundImage: 'url('+img_elTentIcon+')',
        backgroundSize: '100% 100%',
     };
    const style_tentIcon_outer = {
        pointerEvents: 'none',
     };
    const style_headerTitle = {
        fontSize: 30.1,
        color: 'white',
        textAlign: 'center',
     };
    const style_headerTitle_outer = {
        pointerEvents: 'none',
     };
    const style_userNameField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 17.2,
        fontFamily: "'AvenirNext-Regular', sans-serif",
     };
    const style_passwordField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 17.2,
        fontFamily: "'AvenirNext-Regular', sans-serif",
     };
    const style_button = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBgImage' style={style_bgImage} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elTentIcon' style={style_tentIcon_outer}>
            <div style={style_tentIcon} />
          
          </div>
          
          <div className='font-avenirNextDemiBold  elHeaderTitle' style={style_headerTitle_outer}>
            <div style={style_headerTitle}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_headertitle_957097.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='elUserNameField'>
            <input style={style_userNameField} type="text" placeholder={this.props.locStrings.login_usernamefield_184628} onChange={this.textInputChanged_userNameField} defaultValue={this.state.userNameField}  />
          
          </div>
          
          <div className='elPasswordField'>
            <input style={style_passwordField} type="text" placeholder={this.props.locStrings.login_passwordfield_268823} onChange={this.textInputChanged_passwordField} defaultValue={this.state.passwordField}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  variant="raised" color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.login_button_71145}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
