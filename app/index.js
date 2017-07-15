import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
// import CurrencyList from './screens/CurrencyList';
// import Themes from './screens/Themes';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#ffffff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
})

export default () => <AlertProvider><Navigator /></AlertProvider>;
