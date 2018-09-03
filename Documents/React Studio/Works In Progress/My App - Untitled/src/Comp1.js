import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
    this.props.appActions.updateDataSlot("ds_username", event.target.value);
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
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
      <div className="Comp1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder={this.props.locStrings.comp1_field_530745} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='baseFont elField2'>
            <input style={style_field2} type="text" placeholder={this.props.locStrings.comp1_field2_952132} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
          
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
