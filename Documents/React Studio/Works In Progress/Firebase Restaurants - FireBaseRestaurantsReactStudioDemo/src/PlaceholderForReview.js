import React, { Component } from 'react';
import './App.css';
import ListItemReview from './ListItemReview';


export default class PlaceholderForReview extends Component {

  // Properties used by this component:
  // reviewSubject, reviewerName, reviewRating, reviewText, reviewerProfilePicUrl, reviewDate, userID

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    let transformStateValue_listItemReview = (input) => {
      // This function modifies the value for property 'componentStateId'.
      // There is a variable named 'input' that provides the property value.
      
      if (typeof input === "undefined") {
        
      }
      else{
      var CurrentUserID=this.props.appActions.dataSlots['ds_SlotUserID'];
      if (input===CurrentUserID){
      return 1;
      }
      else {
      return 0;
      }
      }
    }
    
    return (
      <div className="PlaceholderForReview" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='hasNestedComps elListItemReview'>
            <div>
              <ListItemReview reviewSubject={this.props.reviewSubject || ""} reviewerName={this.props.reviewerName} reviewRating={this.props.reviewRating} reviewText={this.props.reviewText} reviewerProfilePicUrl={this.props.reviewerProfilePicUrl} reviewDate={this.props.reviewDate} visualStateIndex={transformStateValue_listItemReview(this.props.userID)} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
