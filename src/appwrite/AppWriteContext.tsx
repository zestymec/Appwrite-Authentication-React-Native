import React, { FC, createContext, useState, useMemo } from 'react'
import { AppWriteService } from './Service'; // Ensure this matches your Service file name
import { PropsWithChildren } from 'react'

const appwriteServiceInstance = new AppWriteService();

type AppContextType = {
    appwrite: AppWriteService;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppWriteContext = createContext<AppContextType>({
    appwrite: appwriteServiceInstance,
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export const AppWriteProvider: FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const defaultValue = useMemo(() => ({
        appwrite: appwriteServiceInstance,
        isLoggedIn,
        setIsLoggedIn,
    }), [isLoggedIn]);

    return (
        <AppWriteContext.Provider value={defaultValue}>
            {children}
        </AppWriteContext.Provider>
    )
}
export default AppWriteProvider;