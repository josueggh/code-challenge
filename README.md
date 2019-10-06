# Farmera Challenge

## Demo
A demo site can found in the next URL:  [https://farmera-challenge.web.app](https://farmera-challenge.web.app/home)

## Requirements 
Below the requirements to run the system
+ [node](https://nodejs.org/en/download/)
+ [ionic](https://ionicframework.com/docs/installation/cli)
+ [firebase](https://firebase.google.com/docs/cli)

## Structure
+ **back**: Folder with the Firebase functions needed to mock the information inside the App
+ **farmera**: *ionic* code related with the application

## Before start
An authentication method was implemented to access to the main screens, so a [Firebase](https://console.firebase.google.com) project needs to be created first to get the `FIREBASE_API_KEY` needed by the [environment](https://github.com/josueggh/code-challenge/blob/master/farmera/src/environments/environment.ts)  configuration files. 

![alt text](https://firebasestorage.googleapis.com/v0/b/farmera-challenge.appspot.com/o/farmera-settings.jpg?alt=media&token=980026ec-cbb4-43f0-8f7d-63880f708d6f "Logo Auth")

After the project is created `Email/Password` sign-in method need to be enabled inside Firebase's Authenticaton section.

![alt text](https://firebasestorage.googleapis.com/v0/b/farmera-challenge.appspot.com/o/farmera-auth.jpg?alt=media&token=7a6eae47-d722-43a5-bd13-62cf3220f803 "Logo Sign-in method")

## Make commands

Some `make` commands was added to help run and deploy the application.

+ `make run`: Run the application on DEV mode 
+ `make site`: Run the process to build the ionic application inside the `www` directory and after that is deployed inside the Firebase instance
+ `make functions`: Deploy the Firebases functions with the mock information used by the application. 