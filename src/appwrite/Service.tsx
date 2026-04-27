import { ID, Client, Account } from 'appwrite'
import Config from 'react-native-config'
import Toast from 'react-native-toast-message'


const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)

type CreateUserAccount = {
    email: string;
    password: string;
    name: string
}

type LoginUserAccount = {
    email: string;
    password: string;
}

export class AppWriteService {
    account: Account;

    constructor() {
        this.account = new Account(client)
    }


    async createAccount({ email, password, name }: CreateUserAccount) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Signup Error',
                text2: error?.message || 'Something went wrong',
            });
            console.log("Appwrite service :: createAccount() :: " + error);
        }
    }

    async login({ email, password }: LoginUserAccount) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: error?.message || 'Invalid credentials'
            });
            console.log("Appwrite service :: login() :: " + error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: " + error);
            return null; 
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log("Appwrite service :: logout() :: " + error);
        }
    }
}

export default new AppWriteService();