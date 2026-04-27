import React from 'react';
import { StatusBar, View , Text } from 'react-native';
import { AppWriteProvider } from './appwrite/AppWriteContext';
import { Router } from './routes/Router';

const App = () => {
  return (
    <AppWriteProvider>
    <Router />
  </AppWriteProvider>

     
  );
}

export default App;