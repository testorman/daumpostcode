import React, { Component } from 'react';
import './App.css';


export default class ListItem1 extends Component {

  // Properties used by this component:
  // username, text

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.username;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_text2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text2 = this.props.text;
    
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_line = {
        borderTop: '1px solid black',
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListItem1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.listitem1_text_96755}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.listitem1_text2_32621}</span>)}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elLine' style={style_line} />
        </div>
      </div>
    )
  }
  

}
