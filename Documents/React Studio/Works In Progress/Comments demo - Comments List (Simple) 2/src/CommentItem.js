import React, { Component } from 'react';
import './App.css';


export default class CommentItem extends Component {

  // Properties used by this component:
  // username, text

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_username = {
        color: 'rgba(0, 0, 0, 0.8203)',
        textAlign: 'left',
     };
    const value_username = this.props.username;
    
    const style_username_outer = {
        pointerEvents: 'none',
     };
    const style_line = {
        borderTop: '1px solid rgba(0, 0, 0, 0.2512)',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8203)',
        textAlign: 'left',
     };
    const value_text = this.props.text;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="CommentItem" style={baseStyle}>
        <div className="layoutFlow">
          <div className='headlineFont elUsername' style={style_username_outer}>
            <div style={style_username}>
              <div>{value_username !== undefined ? value_username : (<span className="propValueMissing">{this.props.locStrings.commentitem_username_930210}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elLine' style={style_line_outer}>
            <div style={style_line} />
          
          </div>
          
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.commentitem_text_267121}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
