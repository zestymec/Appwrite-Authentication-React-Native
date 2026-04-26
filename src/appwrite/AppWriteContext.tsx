import { StyleSheet ,  View, Text } from 'react-native'
import React, { FC , createContext } from 'react'

import Appwrite from './service'
import { PropsWithChildren } from 'react';
import { useState } from 'react';


type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

const AppWriteContext : FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
    const defaultValue = {
        appwrite: new Appwrite(),
        isLoggedIn,
        setIsLoggedIn,
    }
  return (
   <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppWriteContext

const styles = StyleSheet.create({})