import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import btn_icon_688635 from './images/btn_icon_688635.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
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
    
    const dataSheet_postfirebase = this.props.dataSheets['postfirebase'];
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('postfirebase').items);
    
    const style_fab = {
        display: 'block',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps state0_elList'>
            <div style={style_list}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols3_${index % 3} cols5_${index % 5} cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Grid dataSheetId={'postfirebase'} dataSheetRow={row} imgURL={row.imgURL} comment={row.comment} name={row.name} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont state0_elFab' style={style_fab}  variant="fab" color="accent" >
              <img src={btn_icon_688635} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
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
    
    const dataSheet_postfirebase = this.props.dataSheets['postfirebase'];
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
