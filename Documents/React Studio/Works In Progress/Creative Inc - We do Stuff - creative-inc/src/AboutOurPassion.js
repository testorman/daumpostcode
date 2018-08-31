import React, { Component } from 'react';
import './App.css';
import img_state0_elImage from './images/AboutOurPassion_state0_elImage_689574.jpg';
import TeamMember from './TeamMember';
import Slogantop from './Slogantop';
import ContactUs from './ContactUs';
import OurPassion from './OurPassion';
import Logo from './Logo';


export default class AboutOurPassion extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 3) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_image = {
        height: 'auto',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    
    let contentElement_state0_elSwapper1002390;  // This element's content can vary based on screen size
    contentElement_state0_elSwapper1002390 = (<TeamMember name={this.props.name} description={this.props.description} image={this.props.image} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    if (this.props.deviceInfo.screenFormatId === 'narrow-phone') {
      contentElement_state0_elSwapper1002390 = (<Slogantop appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'wide-phone') {
      contentElement_state0_elSwapper1002390 = (<ContactUs appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'narrow-tablet') {
      contentElement_state0_elSwapper1002390 = (<OurPassion appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'wide-tablet') {
      contentElement_state0_elSwapper1002390 = (<Logo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    
    const style_textCopy2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textCopy2_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="AboutOurPassion" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight state0_elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='baseFont state0_elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.aboutourpassion_textcopy_240135}</div>
            </div>
          
          </div>
          
          <div className='state0_elImage' style={style_image_outer}>
            <img style={style_image} src={img_state0_elImage} alt=""  />
          
          </div>
          
          <div className='hasNestedComps state0_elSwapper1002390'>
            <div>
              {contentElement_state0_elSwapper1002390}
            </div>
          
          </div>
          
          <div className='baseFont state0_elTextCopy2' style={style_textCopy2_outer}>
            <div style={style_textCopy2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.aboutourpassion_textcopy2_68912.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 3) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    
    let contentElement_state1_elSwapper1002390;  // This element's content can vary based on screen size
    contentElement_state1_elSwapper1002390 = (<TeamMember name={this.props.name} description={this.props.description} image={this.props.image} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    if (this.props.deviceInfo.screenFormatId === 'narrow-phone') {
      contentElement_state1_elSwapper1002390 = (<Slogantop appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'wide-phone') {
      contentElement_state1_elSwapper1002390 = (<ContactUs appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'narrow-tablet') {
      contentElement_state1_elSwapper1002390 = (<OurPassion appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'wide-tablet') {
      contentElement_state1_elSwapper1002390 = (<Logo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    
    
    return (
      <div className="AboutOurPassion" style={baseStyle}>
        <div className="layoutFlow">
          <div className='hasNestedComps state1_elSwapper1002390'>
            <div>
              {contentElement_state1_elSwapper1002390}
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 3) --- 
  
  renderState2() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    
    let contentElement_state2_elSwapper1002390;  // This element's content can vary based on screen size
    contentElement_state2_elSwapper1002390 = (<TeamMember name={this.props.name} description={this.props.description} image={this.props.image} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    if (this.props.deviceInfo.screenFormatId === 'narrow-phone') {
      contentElement_state2_elSwapper1002390 = (<Slogantop appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'wide-phone') {
      contentElement_state2_elSwapper1002390 = (<ContactUs appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'narrow-tablet') {
      contentElement_state2_elSwapper1002390 = (<OurPassion appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    else if (this.props.deviceInfo.screenFormatId === 'wide-tablet') {
      contentElement_state2_elSwapper1002390 = (<Logo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />);
    }
    
    
    return (
      <div className="AboutOurPassion" style={baseStyle}>
        <div className="layoutFlow">
          <div className='hasNestedComps state2_elSwapper1002390'>
            <div>
              {contentElement_state2_elSwapper1002390}
            </div>
          
          </div>
          
        </div>
      </div>
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
