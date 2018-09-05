import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class PostFormScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserName

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
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.ds_SlotUserName;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_field2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_button = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen PostFormScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.postform_text_301963}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder={this.props.locStrings.postform_field_473348} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='baseFont elField2'>
            <input style={style_field2} type="text" placeholder={this.props.locStrings.postform_field2_793536} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" >
              {this.props.locStrings.postform_button_855021}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
