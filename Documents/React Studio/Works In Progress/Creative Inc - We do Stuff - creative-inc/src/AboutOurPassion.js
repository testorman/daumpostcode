import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/AboutOurPassion_elImage_689574.jpg';
import Button1 from './Button1';


export default class AboutOurPassion extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      selectedIndex_selector: 0,
    };
  }

  selectorSelectionChanged = (idx, ev) => {
    this.setState({selectedIndex_selector: idx});
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
    const style_textCopy2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_selector = {
        height: 'auto',  // This element is in scroll flow
     };
    // eslint-disable-next-line no-unused-vars
    const style_selector_part = {
        display: 'inline-block',
        position: 'relative',
        width: '91px',
     };
    
    return (
      <div className="AboutOurPassion" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='baseFont elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.aboutourpassion_textcopy_240135}</div>
            </div>
          
          </div>
          
          <div className='elImage' style={style_image_outer}>
            <img style={style_image} src={img_elImage} alt=""  />
          
          </div>
          
          <div className='baseFont elTextCopy2' style={style_textCopy2_outer}>
            <div style={style_textCopy2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.aboutourpassion_textcopy2_68912.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elSelector'>
            <div style={style_selector}>
              <div style={style_selector_part}  onClick={this.selectorSelectionChanged.bind(this, 0)}><Button1 visualStateIndex={this.state.selectedIndex_selector === 0 ? 1 : 0} title='Part 1' appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} /></div>
              <div style={style_selector_part}  onClick={this.selectorSelectionChanged.bind(this, 1)}><Button1 visualStateIndex={this.state.selectedIndex_selector === 1 ? 1 : 0} title='Part 2' appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} /></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
