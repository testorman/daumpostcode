import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import WriteAReviewScreen from './WriteAReviewScreen.js';
import LoginReviewScreen from './LoginReviewScreen.js';
import RestaurantDetailsScreen from './RestaurantDetailsScreen.js';
import RestaurantsScreen from './RestaurantsScreen.js';
import LoginMainScreen from './LoginMainScreen.js';
import LitsDetailsScreen from './LitsDetailsScreen.js';
import DataSheet_restaurants from './DataSheet_restaurants.js';
import DataSheet_reviews from './DataSheet_reviews.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_pickerNumberOfRows from './DataSheet_pickerNumberOfRows.js';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['restaurants'] = new DataSheet_restaurants('restaurants', this.dataSheetDidUpdate);
    this.dataSheets['reviews'] = new DataSheet_reviews('reviews', this.dataSheetDidUpdate);
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['pickerNumberOfRows'] = new DataSheet_pickerNumberOfRows('pickerNumberOfRows', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_selectedRestaurantId'] = "";
    this.dataSlots['ds_numberOfRestaurants'] = "10";
    this.dataSlots['ds_SlotUserID'] = "";
    this.dataSlots['ds_SlotUserName'] = "";
    this.dataSlots['ds_SlotUserEmail'] = "";
    this.dataSlots['ds_SlotReviewRating'] = "0";
    this.dataSlots['ds_selectedRestaurantName'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    this.serviceOptions_restaurants = {
      dataSlots: this.dataSlots,
      servicePath: "restaurants",
      query: "orderBy(\"restaurantName\").limit($slot('ds_numberOfRestaurants'))",
    };
    this.serviceOptions_reviews = {
      dataSlots: this.dataSlots,
      servicePath: "reviews",
      query: "where(\"restaurantID\", \"==\", \"$slot('ds_selectedRestaurantId')\").orderBy(\"reviewDate\",\"desc\")",
    };

    this.state = {
      currentScreen: 'loginmain',
      currentScreenProps: {},
      screenFormatId: '',
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.loadData_firebaserestaurantguide(this.dataSheets['restaurants'], this.serviceOptions_restaurants, true);
    
    this.loadData_firebaserestaurantguide(this.dataSheets['reviews'], this.serviceOptions_reviews, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState(this.state);
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    if (this.serviceOptions_restaurants.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['restaurants'].expandSlotTemplateString(this.serviceOptions_restaurants.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_firebaserestaurantguide(this.dataSheets['restaurants'], this.serviceOptions_restaurants, true);
      }
    }
    
    if (this.serviceOptions_reviews.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['reviews'].expandSlotTemplateString(this.serviceOptions_reviews.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_firebaserestaurantguide(this.dataSheets['reviews'], this.serviceOptions_reviews, true);
      }
    }
    
    this.setState(this.state);
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState(this.state);
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        ds_activeLang: this.dataSlots['ds_activeLang'],
        ds_selectedRestaurantId: this.dataSlots['ds_selectedRestaurantId'],
        ds_numberOfRestaurants: this.dataSlots['ds_numberOfRestaurants'],
        ds_SlotUserID: this.dataSlots['ds_SlotUserID'],
        ds_SlotUserName: this.dataSlots['ds_SlotUserName'],
        ds_SlotUserEmail: this.dataSlots['ds_SlotUserEmail'],
        ds_SlotUserPhoto: this.dataSlots['ds_SlotUserPhoto'],
        ds_SlotReviewRating: this.dataSlots['ds_SlotReviewRating'],
        ds_selectedRestaurantName: this.dataSlots['ds_selectedRestaurantName'],
      };
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_RestaurantDetailsScreen = this.dataSheets['restaurants'].items[0];
      const screenData_RestaurantDetailsScreen = {
        ...dataSheetRow_RestaurantDetailsScreen,
        dataSheetRow: dataSheetRow_RestaurantDetailsScreen,
      }
      switch (screenId) {
        default:
          return null;
        case 'writeareview':
          return (<WriteAReviewScreen {...screenProps} />)
        case 'loginreview':
          return (<LoginReviewScreen {...screenProps} />)
        case 'restaurantdetails':
          return (<RestaurantDetailsScreen {...screenProps} {...screenData_RestaurantDetailsScreen} />)
        case 'restaurants':
          return (<RestaurantsScreen {...screenProps} />)
        case 'loginmain':
          return (<LoginMainScreen {...screenProps} />)
        case 'litsdetails':
          return (<LitsDetailsScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
