import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
    projectId : '6540e0019c3bf33f4110',
    url: 'https://cloud.appwrite.io/v1' ,
  
}
client.setProject(appwriteConfig.projectId);

export const client = new Client();
export const account = new Account();
export const databaces = new Databases();
export const avatar = new Avatars();
export const storage = new Storage();
