import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import Component1 from './Component1';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class BoardScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
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
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('postfirebase').items);
    
    const style_rectangle = {
        background: 'rgba(0, 0, 0, 1.000)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen BoardScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
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
          <div className="title">Board</div></Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_rectangle} />
            <div className='hasNestedComps elComponent'>
              <Component1 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
