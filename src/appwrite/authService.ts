import config from "@/config/config";
import { User } from "@/types/appwrite";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;

    //when object create then our account create
    //setup account and client

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }


    async createAccount({ email, password, name }: User) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }: User) {
        try {
            const userAccount = await this.account.createEmailSession(email, password);
            return userAccount
        } catch (error: any) {
            throw error;
        }
    }

    async isLogin(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error: any) {
            return false
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error: any) {
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error: any) {
            throw error
        }
    }
}
const authService = new AuthService();

export default authService