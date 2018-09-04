import React, { Component } from 'react';
import './App.css';
import btn_icon_back_login1 from './images/btn_icon_back_login1.png';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class Login1Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  componentDidMount() {
    // Check if Firebase login has been completed.
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        if (this._elFirebaseLogin)
          this._elFirebaseLogin.saveCurrentUserDataInApp();
        
        this.props.appActions.goToScreen('board');
        
      }
    }, 50);
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
    
    
    return (
      <div className="AppScreen Login1Screen" style={baseStyle}>
        <Appbar className="navBar">
          <div className="title">Login 1</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_login1} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
