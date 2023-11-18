const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const{getRegistrationTokensFromDatabase}=require("../controllers/getRegistrationTokensFromDatabase");
const serverKey = 'BG0GpvdNHgapbJibhx6ItcvH2nclWhyBlLNf6wHfoVU'; 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://livechat-bdce9.firebaseio.com'
});
async function sendPushNotifications() {
        try {
            const registrationTokens = await getRegistrationTokensFromDatabase(); // Await the async function
    
            const message = {
                notification: {
                    title: 'New Chat Message',
                    body: 'You have a new message from a friend!',
                },
            };
    
            const multicastMessage = {
                tokens: registrationTokens,
                notification: message.notification,
            };
    
            const response = await admin.messaging().sendMulticast(multicastMessage); // Await the sendMulticast function
    
            console.log('Notification sent successfully');
        } catch (error) {
            console.error('Error sending notification:', error);
        }
}
module.exports={sendPushNotifications}