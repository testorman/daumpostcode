import React, { Component } from 'react';
import './App.css';
import img_state0_elImage624414 from './images/StartScreen_state0_elImage624414_624414.jpg';
import img_state0_elReactstudio_layoutdemo_headerpic from './images/StartScreen_state0_elReactstudio_layoutdemo_headerpic_360944.jpg';
import img_state1_elImage624414 from './images/StartScreen_state0_elImage624414_624414.jpg';
import img_state2_elImage624414 from './images/StartScreen_state0_elImage624414_624414.jpg';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Functions for component state index 0 (1 of 3) --- 
  
  renderState0() {
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
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_image = {
        backgroundImage: 'url('+img_state0_elImage624414+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_reactstudio_layoutdemo_headerpic = {
        height: 'auto',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state0_elImage624414' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <img className='containerMinHeight state0_elReactstudio_layoutdemo_headerpic' style={style_reactstudio_layoutdemo_headerpic} src={img_state0_elReactstudio_layoutdemo_headerpic} alt=""  />
          </div>
        </div>
      </Container>
    )
  }
  
  // --- Functions for component state index 1 (2 of 3) --- 
  
  renderState1() {
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
    
    const style_image = {
        backgroundImage: 'url('+img_state1_elImage624414+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state1_elImage624414' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
        </div>
      </Container>
    )
  }
  
  // --- Functions for component state index 2 (3 of 3) --- 
  
  renderState2() {
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
    
    const style_image = {
        backgroundImage: 'url('+img_state2_elImage624414+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state2_elImage624414' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
        </div>
      </Container>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
      case 2:
        return this.renderState2();
    }
  }
  

}
