import React, { Component } from 'react';
import './App.css';
import Slogantop from './Slogantop';
import WereThirsty from './WereThirsty';
import OurTeam from './OurTeam';
import TeamMember from './TeamMember';
import OurMission from './OurMission';
import WhatWeDo from './WhatWeDo';
import HowWeDoIt from './HowWeDoIt';
import OurPassion from './OurPassion';
import AboutOurPassion from './AboutOurPassion';
import ContactUs from './ContactUs';
import Map from './Map';
import SocialLinks from './SocialLinks';
import btn_icon_625800 from './images/btn_icon_625800.png';
import Menu from './Menu';
import Logo from './Logo';
import btn_icon_731745 from './images/btn_icon_731745.png';
import btn_icon_380607 from './images/btn_icon_380607.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elMenu_visible: false,
      elMenuUp_visible: false,
      elMenuDown_visible: true,
    };
  }

  onClick_elFab = (ev) => {
    alert("This is a demo");
  
  }
  
  
  onClick_elMenuUp = (ev) => {
    this.setState({elMenu_visible: !this.state.elMenu_visible});
  
    this.setState({elMenuDown_visible: true});
  
    this.setState({elMenuUp_visible: false});
  
  }
  
  
  onClick_elMenuDown = (ev) => {
    this.setState({elMenu_visible: !this.state.elMenu_visible});
  
    this.setState({elMenuUp_visible: true});
  
    this.setState({elMenuDown_visible: false});
  
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
    
    const dataSheet_team = this.props.dataSheets['team'];
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_teamPics = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'Team pics'.
    let items_teamPics = [];
    let listComps_teamPics = {};
    items_teamPics = items_teamPics.concat(this.props.appActions.getDataSheet('team').items);
    
    const style_whatWeDo = {
        height: 'auto',  // This element is in scroll flow
     };
    const style_fab = {
        display: 'block',
        textAlign: 'left',
        backgroundColor: '#222835',
        textTransform: 'none',
        cursor: 'pointer',
     };
    const style_menu = {
        boxShadow: '0.0px 6.8px 48px rgba(0, 0, 0, 0.4500)',
     };
    const elMenu = this.state.elMenu_visible ? (
        <div className='hasNestedComps elMenu' style={style_menu}>
          <Menu appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
        </div>
     ) : null;
    const style_top = {
        width: '100%',
        height: '100%',
     };
    const style_top_outer = {
        backgroundColor: 'transparent',
        padding: '6.8px',
     };
    const style_menuUp = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_731745+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '88.865%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        cursor: 'pointer',
     };
    const elMenuUp = this.state.elMenuUp_visible ? (
        <button className='actionFont elMenuUp' style={style_menuUp}  onClick={this.onClick_elMenuUp}  />
     ) : null;
    const style_menuDown = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_380607+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.763%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        cursor: 'pointer',
     };
    const elMenuDown = this.state.elMenuDown_visible ? (
        <button className='actionFont elMenuDown' style={style_menuDown}  onClick={this.onClick_elMenuDown}  />
     ) : null;
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elSlogantop'>
            <div>
              <Slogantop appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elJoinUs'>
            <div>
              <WereThirsty appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elTeamHeadline'>
            <div>
              <OurTeam appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elTeamPics'>
            <div style={style_teamPics}>
              {items_teamPics.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2} cols3_${index % 3}`;
                let itemComp = (row._componentId) ? listComps_teamPics[row._componentId] : <TeamMember dataSheetId={'team'} dataSheetRow={row} name={row.name} description={row.description} image={row.image} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
          </div>
          
          <div className='hasNestedComps elOurMission'>
            <div>
              <OurMission appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elWhatWeDo'>
            <div style={style_whatWeDo}>
              <div className="col0">
                <WhatWeDo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <HowWeDoIt appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elOurPassion'>
            <div>
              <OurPassion appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elAboutOurPassion'>
            <div>
              <AboutOurPassion appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elContactUs'>
            <div>
              <ContactUs appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elMap'>
            <div>
              <Map appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elSocial'>
            <div>
              <SocialLinks appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elFab' style={style_fab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_625800} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            { elMenu }
            <div className='hasNestedComps elTop' style={style_top_outer}>
              <div style={style_top}>
                <Logo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            
            </div>
            
            { elMenuUp }
            { elMenuDown }
          </div>
        </div>
      </div>
    )
  }
  

}
