```
npx issues all
npx issues create
npx issues add reminder
```


```
Create Project: https://developers.google.com/workspace/guides/create-project
Enable API: https://console.cloud.google.com/flows/enableapi?apiid=calendar-json.googleapis.com

In the Google Cloud console, go to Menu menu > APIs & Services > Credentials.
(or) Go to Credentials: https://console.cloud.google.com/apis/credentials

Click Create Credentials > OAuth client ID.
Click Application type > Desktop app.
In the Name field, type a name for the credential. This name is only shown in the Google Cloud console.
Click Create. The OAuth client created screen appears, showing your new Client ID and Client secret.
Click OK. The newly created credential appears under OAuth 2.0 Client IDs.
Save the downloaded JSON file as credentials.json, and move the file to the root folder


The first time you run the sample, it prompts you to authorize access:

If you're not already signed in to your Google Account, you're prompted to sign in. If you're signed in to multiple accounts, select one account to use for authorization.
Click Accept.
Authorization information is stored in the file system, so the next time you run the sample code, you aren't prompted for authorization.

(Notes from Google Calendar API docs)
```