import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_839157";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_835721";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text3_966792";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "board_iconbutton_342475";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_407997";
    item['en'] = "Sign Out";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_466302";
    item['en'] = "Sign in";
    
    item = {};
    this.items.push(item);
    item['key'] = "board_text_1037288";
    item['en'] = "Post";
    
    item = {};
    this.items.push(item);
    item['key'] = "postform_text_301963";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "postform_button_855021";
    item['en'] = "Post";
    
    item = {};
    this.items.push(item);
    item['key'] = "grid_button_973409";
    item['en'] = "Delete";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
