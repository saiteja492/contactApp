/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import ContactForm from './src/components/contactForm';

import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

import store from "./src/reducers";


const persist = store();

const App = () => {
  return (
    <Provider store={persist.store}>
                <PersistGate loading={null} persistor={persist.persistor}>
                  <ContactForm />
                </PersistGate>
            </Provider>
  );
};



export default App;
