import React, { Component } from 'react';
import './App.css';


export default class AdventureFooter extends Component {

  // Properties used by this component:
  // title, description

  onClick_elShortDescription = (ev) => {
    alert("In a real app, we could open a link to a phone number here.")
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_clickableBg = {
        background: 'rgba(12, 55, 119, 0.114)',
        pointerEvents: 'none',
     };
    const style_shortDescription = {
        fontSize: 13.0,
        color: '#4a494a',
        textAlign: 'left',
        cursor: 'pointer',
     };
    const value_shortDescription = this.props.description;
    
    const style_title = {
        fontSize: 16.7,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const value_title = this.props.title;
    
    
    return (
      <div className="AdventureFooter" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elClickableBg' style={style_clickableBg} />
        </div>
        <div className="foreground">
          <div className='font-avenirNextRegular  elShortDescription' style={style_shortDescription} onClick={this.onClick_elShortDescription} >
            <div>{value_shortDescription !== undefined ? value_shortDescription : (<span className="propValueMissing">{this.props.locStrings.adventurefooter_shortdescription_191399}</span>)}</div>
          </div>
          <div className='font-avenirNextBold  elTitle' style={style_title}>
            <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.adventurefooter_title_361945}</span>)}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
