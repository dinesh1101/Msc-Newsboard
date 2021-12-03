# M.Sc Newsboard
This is a Web Application that provides the latest news for my department students and one can convey circular/news to all batch students by adding news in it.
Tech Stack: React JS, React-Boostrap, Firebase.  
Visit this application at [https://newsboard-msc.netlify.app/#/](https://newsboard-msc.netlify.app/#/)

## Setup and run the app

Follow these steps to setup and run the quickstart:

 1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com).
 2.  In the Firebase console, enable Anonymous authentication on your project by doing: Authentication > SIGN-IN METHOD > Anonymous > Enable > SAVE
 3. In the Firebase console, enable Firestore on your project by clicking Create Database in the Cloud Firestore section of the console and answering all prompts.
     1. Select testing mode for the security rules
 4. Clone/Download this repo and open this folder in a Terminal.
 5. Install the Firebase CLI if you do not have it installed on your machine:
    
bash
    npm -g i firebase-tools
    
 1. Set the CLI to use the project you created on step 1:
    
bash
    firebase use --add
    
 1. Deploy the Firestore security rules and indexes:
    
bash
    firebase deploy --only firestore
    
 1. Run a local server:
    
bash
    firebase serve
    
 1. As indicated, open [http://localhost:5000](http://localhost:5000) in your browser and try out the app.
 
 ## How to use this app
 1.Initially register your account using Email or google account.
 2.View the news under each category.
 3.If you are the one with a new circular, click Add News button
 4.Choose the category you need to display news
 5.By adding so, it will be displayed in that news category
 
## How the app look like

 (screenshots will be uploaded soon)
