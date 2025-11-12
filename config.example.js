// Copy this file to config.js and fill in your actual credentials
// config.js is gitignored and will not be committed to version control

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    databaseURL: "https://your-app.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

const googleApiKey = "YOUR_GOOGLE_AI_API_KEY";

// Export for use in the HTML file
if (typeof window !== 'undefined') {
    window.CONFIG = {
        firebaseConfig,
        googleApiKey
    };
}

