import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppWriteContext } from '../appwrite/AppWriteContext'; 
import Loading from '../coponents/Loading';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppWriteContext)

    useEffect(() => {
        appwrite.getCurrentUser()
            .then((response: any) => {
                if (response) setIsLoggedIn(true)
                setIsLoading(false)
            })
            .catch((_: any) => {
                setIsLoggedIn(false)
                setIsLoading(false)
            })
    }, [appwrite, setIsLoggedIn])

    if (isLoading) return <Loading />

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}