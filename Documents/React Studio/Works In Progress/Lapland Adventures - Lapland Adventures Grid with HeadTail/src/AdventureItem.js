import React, { Component } from 'react';
import './App.css';
import img_elPicture from './images/AdventureItem_elPicture_333009.jpg';


export default class AdventureItem extends Component {

  // Properties used by this component:
  // title, description, picture

  onClick_elHotspot = (ev) => {
    // Go to screen 'Details'
    this.props.appActions.goToScreen('details', { ...this.props, transitionId: 'fadeIn' });
  
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
    const style_title = {
        fontSize: 14.6,
        color: '#4a494a',
        textAlign: 'left',
     };
    const value_title = this.props.title;
    
    const style_title_outer = {
        pointerEvents: 'none',
     };
    const style_shortDescription = {
        fontSize: 13.0,
        color: '#4a494a',
        textAlign: 'left',
     };
    const value_shortDescription = this.props.description;
    
    const style_shortDescription_outer = {
        pointerEvents: 'none',
     };
    const style_picture = {
        backgroundImage: 'url('+(this.props.picture || img_elPicture)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_hotspot = {
        display: 'block',
        backgroundColor: 'transparent',
        cursor: 'pointer',
     };
    
    return (
      <div className="AdventureItem" style={baseStyle}>
        <div className="background">
          <div className='elClickableBg' style={style_clickableBg} />
        </div>
        <div className="layoutFlow">
          <div className='font-avenirNextMedium  elTitle' style={style_title_outer}>
            <div style={style_title}>
              <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.adventureitem_title_282724}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-avenirNextRegular  elShortDescription' style={style_shortDescription_outer}>
            <div style={style_shortDescription}>
              <div>{value_shortDescription !== undefined ? value_shortDescription : (<span className="propValueMissing">{this.props.locStrings.adventureitem_shortdescription_638166}</span>)}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elPicture' style={style_picture} />
          <div className='actionFont elHotspot' style={style_hotspot}  onClick={this.onClick_elHotspot}  />
        </div>
      </div>
    )
  }
  

}
