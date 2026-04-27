import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

// Context aur Router imports
import { AppWriteProvider , AppWriteContext } from './appwrite/AppwriteContext';
import { Router } from './routes/Router';

const App = () => {
  return (
    <AppWriteProvider>
    <Router />
  </AppWriteProvider>
     
  );
};

export default App;