import React, { Component } from 'react';
import './App.css';


export default class Menu extends Component {

  // This component doesn't use any properties

  onClick_elHotspot = (ev) => {
    alert("This is a demo. You need to replace the links with real buttons in React Studio");
    
    
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(254, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_line = {
        borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_lineCopy4 = {
        borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_lineCopy4_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy4 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_textCopy4_outer = {
        pointerEvents: 'none',
     };
    const style_lineCopy = {
        borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_lineCopy_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_textCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_lineCopy2 = {
        borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_lineCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_textCopy3_outer = {
        pointerEvents: 'none',
     };
    const style_lineCopy5 = {
        borderTop: '1px solid rgba(0, 0, 0, 0.6976)',
     };
    const style_lineCopy5_outer = {
        pointerEvents: 'none',
     };
    const style_hotspot = {
        display: 'block',
        backgroundColor: 'transparent',
        cursor: 'pointer',
     };
    
    return (
      <div className="Menu" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='elLine' style={style_line_outer}>
            <div style={style_line} />
          
          </div>
          
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.menu_text_935101}</div>
            </div>
          
          </div>
          
          <div className='elLineCopy4' style={style_lineCopy4_outer}>
            <div style={style_lineCopy4} />
          
          </div>
          
          <div className='headlineFont elTextCopy4' style={style_textCopy4_outer}>
            <div style={style_textCopy4}>
              <div>{this.props.locStrings.menu_textcopy4_586959}</div>
            </div>
          
          </div>
          
          <div className='elLineCopy' style={style_lineCopy_outer}>
            <div style={style_lineCopy} />
          
          </div>
          
          <div className='headlineFont elTextCopy2' style={style_textCopy2_outer}>
            <div style={style_textCopy2}>
              <div>{this.props.locStrings.menu_textcopy2_954691}</div>
            </div>
          
          </div>
          
          <div className='elLineCopy2' style={style_lineCopy2_outer}>
            <div style={style_lineCopy2} />
          
          </div>
          
          <div className='headlineFont elTextCopy3' style={style_textCopy3_outer}>
            <div style={style_textCopy3}>
              <div>{this.props.locStrings.menu_textcopy3_778404}</div>
            </div>
          
          </div>
          
          <div className='elLineCopy5' style={style_lineCopy5_outer}>
            <div style={style_lineCopy5} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='actionFont containerMinHeight elHotspot' style={style_hotspot}  onClick={this.onClick_elHotspot}  />
        </div>
      </div>
    )
  }
  

}
