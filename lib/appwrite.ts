import { Client,Account,Avatars } from 'react-native-appwrite'
import * as Linking from 'expo-linking'

export const config ={
    platform: 'com.jsm.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
       .setEndpoint(config.endpoint!)
       .setProject(config.projectId!)
       .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client)

export async function Login() {
    try{
        const redirectURL = Linking.createURL( '/');

        const response= await account.createOAuth2Token(
            OAuthProvider.Google. redirectURL);

            if(!response) throw new Error('Failed to login');
            const browserResult = await openAuthSessionAsync(
                response.toString(),
                redirectURL
            )
            if(browserResult.type !== 'success') throw new Error( 'Failed to login')

                const url = new URL(browserResult);

                const secret = url.searchParams.get('secret')?.toString();
                const userId = url.searchParams.get('userId')?.toString();

                if(!secret || !userId) throw new Error('failed to login')
                
                const session = await account.createSession(userId, secret);
                if(!session) throw new Error('failed to create a session')
                    return session;

                

    }
    catch(error){
        console.error(error)
        return false;
    }
}

export async function Logout()  {

    try{
        await account.deleteSession(sessionid: 'current');
        return true;
    } catch (error){
        console.error(error)
        return false;
    }
    
}

export async function getUser() {
    try{
        const response = await account.get();
        if(response.$id) {
            const userAvatar = avatar.getInintials(response.name)
        }
        return {
            ...response,
            avatar: userAvatar.toString(),
        }
    } catch (error){
        console.error(error);
        return null
    }
}