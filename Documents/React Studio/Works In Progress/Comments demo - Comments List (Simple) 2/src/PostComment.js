import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class PostComment extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      text: '',
    };
  }

  textInputChanged_username = (event) => {
    this.setState({username: event.target.value});
    this.props.appActions.updateDataSlot("ds_username", event.target.value);
  }
  
  textInputChanged_text = (event) => {
    this.setState({text: event.target.value});
  }
  
  onClick_elPostButton = (ev) => {
    this.sendData_postButton_to_listData1();
  
  }
  
  
  sendData_postButton_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listData1');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      text: this.state.text,
      username: this.state.username,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listData1', row);
    } else {
      this.props.appActions.addToDataSheet('listData1', row);
    }
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_username = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: 'rgba(0, 0, 0, 0.8203)',
     };
    const style_text = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: 'rgba(0, 0, 0, 0.8203)',
     };
    const style_postButton = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_postButton_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="PostComment" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elUsername'>
            <input style={style_username} type="text" placeholder={this.props.locStrings.postcomment_username_66705} onChange={this.textInputChanged_username} defaultValue={this.state.username}  />
          
          </div>
          
          <div className='baseFont elText'>
            <input style={style_text} type="text" placeholder={this.props.locStrings.postcomment_text_393326} onChange={this.textInputChanged_text} defaultValue={this.state.text}  />
          
          </div>
          
          <div className='actionFont elPostButton' style={style_postButton_outer}>
            <Button style={style_postButton}  color="accent" onClick={this.onClick_elPostButton} >
              {this.props.locStrings.postcomment_postbutton_371091}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
