import React, { Component } from 'react';
import './App.css';
import ListItemRestaurantsListDetails from './ListItemRestaurantsListDetails';


export default class RestaurantList extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const dataSheet_restaurants = this.props.appActions.getDataSheet('restaurants');
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
    items_list = items_list.concat(this.props.appActions.getDataSheet('restaurants').items);
    
    
    return (
      <div className="RestaurantList" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItemRestaurantsListDetails dataSheetId={'restaurants'} dataSheetRow={row} restaurantName={row.restaurantName} restaurantAddress={row.restaurantAddress} restaurantOpeningHours={row.restaurantOpeningHours} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
