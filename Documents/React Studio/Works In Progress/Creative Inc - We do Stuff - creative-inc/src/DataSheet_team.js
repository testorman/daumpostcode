import DataSheetBase from './DataSheetBase.js';
import datasheet_team_row0_image from './images/datasheet_team_row0_image.png';
import datasheet_team_row1_image from './images/datasheet_team_row1_image.png';
import datasheet_team_row2_image from './images/datasheet_team_row2_image.png';

export default class DataSheet_team extends DataSheetBase {

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
    item['name'] = "Gabrielle";
    item['image'] = datasheet_team_row0_image;
    item['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Samantha";
    item['image'] = datasheet_team_row1_image;
    item['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Erika";
    item['image'] = datasheet_team_row2_image;
    item['description'] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum.";
    item.key = key++;
  }

}
