import React, { Component } from 'react';
import './App.css';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
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
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_text2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_field2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.start_text_519856}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder={this.props.locStrings.start_field_931391} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='baseFont elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{this.props.locStrings.start_text2_972884}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField2'>
            <input style={style_field2} type="text" placeholder={this.props.locStrings.start_field2_774955} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
