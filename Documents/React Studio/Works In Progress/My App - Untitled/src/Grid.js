import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Grid_elImage_519339.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Grid extends Component {

  // Properties used by this component:
  // imgURL, comment, name

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>New text. Double-click to edit</div>),
      text_plainText: "New text. Double-click to edit",
      text2: (<div>New text. Double-click to edit</div>),
      text2_plainText: "New text. Double-click to edit",
      text3: (<div>New text. Double-click to edit</div>),
      text3_plainText: "New text. Double-click to edit",
    };
  }

  onClick_elButton = (ev) => {
    var jobskill_query = db.collection('post').where('job_id','==',post.job_id);
    jobskill_query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_image = {
        backgroundImage: 'url('+(this.props.imgURL || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.comment;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_text2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text2 = this.props.name;
    
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_text3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text3_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        textAlign: 'center',
        cursor: 'pointer',
     };
    
    return (
      <div className="Grid" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.state.text}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.state.text2}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText3' style={style_text3_outer}>
            <div style={style_text3}>
              <div>{this.state.text3}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <Button className='actionFont elButton' style={style_button}  color="accent" onClick={this.onClick_elButton} >
            {this.props.locStrings.grid_button_973409}
          </Button>
        </div>
      </div>
    )
  }
  

}
