import React, { Component } from 'react';
import './App.css';
import AdventuresTitle from './AdventuresTitle';
import AdventureHeader from './AdventureHeader';
import AdventureFooter from './AdventureFooter';
import AdventureItem from './AdventureItem';
import img_elTentIcon from './images/AdventuresScreen_elTentIcon.png';
import btn_icon_219355 from './images/btn_icon_219355.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class AdventuresScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elIconButton = (ev) => {
    alert("No action here in this demo. This button just shows how to use foreground items on top of the nav bar.")
  
  }
  
  
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
    
    const dataSheet_listData1 = this.props.dataSheets['listData1'];
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    listComps_list['_head'] = <AdventureHeader appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
    items_list.push({key: '_head', _componentId: '_head'});  // A data item to indicate the head item
    
    listComps_list['_tail'] = <AdventureFooter appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Tail item for this list
    
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData1').items);
    items_list.push({key: '_tail', _componentId: '_tail'});  // A data item to indicate the tail item
    
    const style_tentIcon = {
        backgroundImage: 'url('+img_elTentIcon+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    const style_iconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_219355+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '67.478%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen AdventuresScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elAdventuresHead'>
            <div>
              <AdventuresTitle appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <div style={style_list}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2} cols3_${index % 3}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <AdventureItem dataSheetId={'listData1'} dataSheetRow={row} title={row.title} description={row.description} picture={row.picture} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
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
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elTentIcon' style={style_tentIcon} />
            <button className='actionFont elIconButton' style={style_iconButton}  onClick={this.onClick_elIconButton}  />
          </div>
        </div>
      </div>
    )
  }
  

}
