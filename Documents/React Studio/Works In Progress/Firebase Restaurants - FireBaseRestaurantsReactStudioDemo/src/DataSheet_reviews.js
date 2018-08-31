import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_reviews extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin '(null)'.
    
    item = {};
    this.items.push(item);
    item['reviewDate'] = "1523443546656";
    item['userID'] = "qfxvKWiLheNx3Wg60Y0EA2VVMxd2";
    item['reviewSubject'] = "Pidin erityisesti valaistuksesta";
    item['reviewerName'] = "Antti Sihlman";
    item['reviewRating'] = "2";
    item['restaurantID'] = "gMpvCc7jhmrlBDJUSlzL";
    item['key'] = "MevH1hOjo3jsJ67cRm8B";
    item['reviewText'] = "Sain valaistuksen";
    item['reviewerProfilePicUrl'] = "https://lh6.googleusercontent.com/-SxUVRT8YTQI/AAAAAAAAAAI/AAAAAAAAAK4/biqSSgvq7d0/photo.jpg";
    
    item = {};
    this.items.push(item);
    item['reviewDate'] = "1523436547352";
    item['userID'] = "qfxvKWiLheNx3Wg60Y0EA2VVMxd2";
    item['reviewSubject'] = "Pidin tästä paikasta";
    item['reviewerName'] = "Antti";
    item['reviewRating'] = "2";
    item['restaurantID'] = "gMpvCc7jhmrlBDJUSlzL";
    item['key'] = "8jpO1MCTlaGuPD4tFJqa";
    item['reviewText'] = "Oli kyllä hieno ilta";
    item['reviewerProfilePicUrl'] = "https://lh6.googleusercontent.com/-SxUVRT8YTQI/AAAAAAAAAAI/AAAAAAAAAK4/biqSSgvq7d0/photo.jpg";
  }

}
