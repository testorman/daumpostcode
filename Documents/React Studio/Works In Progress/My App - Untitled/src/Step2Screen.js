import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class Step2Screen extends Component {

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
    
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen Step2Screen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.step2_text_293657.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
