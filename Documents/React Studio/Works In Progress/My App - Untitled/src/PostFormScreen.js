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
      imgURLField: '',
      comment: '',
    };
  }

  textInputChanged_imgURLField = (event) => {
    this.setState({imgURLField: event.target.value});
  }
  
  textInputChanged_comment = (event) => {
    this.setState({comment: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_postfirebase();
  
    // Go to screen 'Board'
    this.props.appActions.goToScreen('board', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button_to_postfirebase = () => {
    const dataSheet = this.props.appActions.getDataSheet('postfirebase');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      imgURL: this.state.imgURLField,
      key: this.props.ds_SlotUserID,
      comment: this.state.comment,
      name: this.props.ds_SlotUserName,
    };
  
    const transformData = (input) => {
        // This function modifies the value saved to the data sheet.
      // There is a variable named 'input' that provides the input values:
      // it's a JavaScript object with properties that contain all the
      // values collected from the UI.
      return input;
    }
    row = transformData(row);
  
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('postfirebase', row);
    } else {
      this.props.appActions.addToDataSheet('postfirebase', row);
    }
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
    const style_name = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_name = this.props.ds_SlotUserName;
    
    const style_name_outer = {
        pointerEvents: 'none',
     };
    const style_imgURLField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_comment = {
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
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen PostFormScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elName' style={style_name_outer}>
            <div style={style_name}>
              <div>{value_name !== undefined ? value_name : (<span className="propValueMissing">{this.props.locStrings.postform_text_301963}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elImgURLField'>
            <input style={style_imgURLField} type="text" placeholder={this.props.locStrings.postform_field_473348} onChange={this.textInputChanged_imgURLField} defaultValue={this.state.imgURLField}  />
          
          </div>
          
          <div className='baseFont elComment'>
            <input style={style_comment} type="text" placeholder={this.props.locStrings.postform_field2_793536} onChange={this.textInputChanged_comment} defaultValue={this.state.comment}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.postform_button_855021}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
