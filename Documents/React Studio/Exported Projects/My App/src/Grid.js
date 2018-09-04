import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Grid_elImage_519339.jpg';


export default class Grid extends Component {

  // Properties used by this component:
  // imgURL, comment, name

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_image = {
        backgroundImage: 'url('+(this.props.imgURL || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.comment;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_text2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text2 = this.props.name;
    
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_text3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text3_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Grid" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.component1_text_839157}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.component1_text2_835721}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText3' style={style_text3_outer}>
            <div style={style_text3}>
              <div>{this.props.locStrings.component1_text3_966792}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
