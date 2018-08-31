import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_restaurants extends DataSheetBase {

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
    item['restaurantOpeningHours'] = "Mon-Fri 9-01";
    item['restaurantEmail'] = "hello@onnentupa.fi";
    item['restaurantName'] = "Happy days";
    item['restaurantPhone'] = "019 73429903";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00004-restaurant.jpg";
    item['restaurantID'] = "cNNMnMeCcj7HgJwYujPY";
    item['key'] = "cNNMnMeCcj7HgJwYujPY";
    item['restaurantDescription'] = "Ravintola Onnentupa on ruokkinut, juottanut ja viihdyttänyt Pukkilan keskustassa jo vuodesta 2008. Tervetuloa nauttimaan palveluistamme!";
    item['restaurantWWW'] = "www.onnentupa.fi";
    item['restaurantAddress'] = "Ravintola Onnentupa Koivulinnantie 3 07560 Pukkila";
    
    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Mon-Sun 9-14";
    item['restaurantEmail'] = "lastu@lastu.fi";
    item['restaurantName'] = "Lastu";
    item['restaurantPhone'] = "03 1234567";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00012-restaurant.jpg";
    item['restaurantID'] = "gMpvCc7jhmrlBDJUSlzL";
    item['key'] = "gMpvCc7jhmrlBDJUSlzL";
    item['restaurantDescription'] = "Skandinavian cousine";
    item['restaurantWWW'] = "www.lastu.com";
    item['restaurantAddress'] = "03 1234567";
    
    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Mon - Tue 10-24";
    item['restaurantEmail'] = "nakki@hki.fi";
    item['restaurantName'] = "Paul's snackpoint";
    item['restaurantPhone'] = "09 123456";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00022-restaurant.jpg";
    item['restaurantDescription'] = "Parasta nakkia";
    item['key'] = "rHPJrSUDn4DxQ2tgINpD";
    item['restaurantWWW'] = "www.fi";
    item['restaurantAddress'] = "09 123456";
    
    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Mon-Sat 11-17";
    item['restaurantEmail'] = "hello@restaurant.com";
    item['restaurantName'] = "Pizzeria Bella";
    item['restaurantPhone'] = "012345678";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00021-restaurant.jpg";
    item['restaurantDescription'] = "Restaurant served excellent food since 1931. Today,  Restaurant Torni combines delicious flavours and visual elements with style and  an experimental twist, according to the season.";
    item['key'] = "UW621DzbKtfTS7IzDAg8";
    item['restaurantWWW'] = "www.pizzeriabella.com";
    item['restaurantAddress'] = "2086 Chatham Way";
    
    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Mon - Thu 10-21";
    item['restaurantEmail'] = "tonno@pizzas.com";
    item['restaurantName'] = "Pizzeria Tonno";
    item['restaurantPhone'] = "012345678";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00003-restaurant.jpg";
    item['restaurantDescription'] = "Best pizzas";
    item['key'] = "Bv8RWDphy9bxKP0eIEkD";
    item['restaurantWWW'] = "www.thebestpizza.com";
    item['restaurantAddress'] = "02 03898982";
    
    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Mon-Sun 10-23";
    item['restaurantEmail'] = "foo@ravintolatorni.fi";
    item['restaurantName'] = "Ravintola Torni";
    item['restaurantPhone'] = "123456789";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00002-restaurant.jpg";
    item['restaurantID'] = "7TzSbOxY1R78wIBLJ2Om";
    item['key'] = "7TzSbOxY1R78wIBLJ2Om";
    item['restaurantDescription'] = "The restaurants of Torni have served excellent food since 1931. Today,  Restaurant Torni combines delicious flavours and visual elements with style and  an experimental twist, according to the season.";
    item['restaurantWWW'] = "www.ravintolatorni.fi";
    item['restaurantAddress'] = "Kalevankatu 5, 00100 Helsinki";
    
    item = {};
    this.items.push(item);
    item['restaurantOpeningHours'] = "Tue-Thu 11-22";
    item['restaurantEmail'] = "foo@bar.fi";
    item['restaurantName'] = "Savoy";
    item['restaurantPhone'] = "016 12345678";
    item['restaurantCoverImage'] = "http://s3.amazonaws.com/sc.neonto.com/demopics/restaurant-demo-pics/00007-restaurant.jpg";
    item['restaurantID'] = "fP70rt2yOdsz36wMiZ5P";
    item['key'] = "fP70rt2yOdsz36wMiZ5P";
    item['restaurantDescription'] = "Great place to eat friendly staff great food brilliant atmosphere ";
    item['restaurantWWW'] = "www.keloravintola.fi";
    item['restaurantAddress'] = "Revontulentie 9, 98900 Salla";
  }

}
