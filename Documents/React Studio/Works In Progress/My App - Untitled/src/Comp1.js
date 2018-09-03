import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      comment: '',
    };
  }

  textInputChanged_username = (event) => {
    this.setState({username: event.target.value});
    this.props.appActions.updateDataSlot("ds_username", event.target.value);
  }
  
  textInputChanged_comment = (event) => {
    this.setState({comment: event.target.value});
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
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elUsername'>
            <input style={style_username} type="text" placeholder={this.props.locStrings.comp1_field_530745} onChange={this.textInputChanged_username} defaultValue={this.state.username}  />
          
          </div>
          
          <div className='baseFont elComment'>
            <input style={style_comment} type="text" placeholder={this.props.locStrings.comp1_field2_952132} onChange={this.textInputChanged_comment} defaultValue={this.state.comment}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" >
              {this.props.locStrings.comp1_button_238421}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
