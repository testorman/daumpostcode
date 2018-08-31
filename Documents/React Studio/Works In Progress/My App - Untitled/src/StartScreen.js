import React, { Component } from 'react';
import './App.css';
import img_elReactstudio_layoutdemo_headerpic from './images/StartScreen_elReactstudio_layoutdemo_headerpic_360944.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'step2'
    this.props.appActions.goToScreen('step2', { ...this.props, transitionId: 'slideIn_right' });
  
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
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_reactstudio_layoutdemo_headerpic = {
        height: 'auto',
        pointerEvents: 'none',
     };
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "";
    
    
    const style_button = {
        display: 'block',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <img className='containerMinHeight elReactstudio_layoutdemo_headerpic' style={style_reactstudio_layoutdemo_headerpic} src={img_elReactstudio_layoutdemo_headerpic} alt=""  />
            <div className='embeddedContent elEmbed'>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
            <Button className='actionFont elButton' style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_609221}
            </Button>
          </div>
        </div>
      </Container>
    )
  }
  

}
