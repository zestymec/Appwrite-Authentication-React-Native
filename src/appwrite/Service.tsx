import { ID, Client, Account } from 'appwrite'
import Config from 'react-native-config'
import Toast from 'react-native-toast-message'

const AppWriteClient = new Client()

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!

type CreateUserAccount = {
    email: string;
    password: string;
    name: string
}

type LoginUserAccount = {
    email: string;
    password: string;
}

class AppWriteService {
    account;

    constructor() {
        AppWriteClient
            .setEndpoint(APPWRITE_ENDPOINT)
            .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(AppWriteClient)
    }

    async CreateAccount({ email, password, name }: CreateUserAccount) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            });

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: String(error),
                visibilityTime: 4000,
            });

            console.log("Appwrite service :: createAccount() :: " + error);
        }
    }

        async LoginUserAccount({ email, password }: LoginUserAccount) {
            try {
                return await this.account.createEmailPasswordSession({
                    email,
                    password
                });
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Login Failed',
                    text2: String(error),
                    visibilityTime: 4000
                });

                console.log("Appwrite service :: loginAccount() :: " + error);
            }
        }
          async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount() :: " + error);
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession({
                sessionId: 'current'
            });
        } catch (error) {
            console.log("Appwrite service :: logout() :: " + error);
        }
    }
    }

export default AppWriteService;