require('dotenv').config({ path: 'process.env' });
const {connection}=require("./db_connect/mongooseConnect");
const {app}=require("./express/initExpress");
const {sendPushNotifications}=require("./push_notification/push_notification");
const {initializeSocket}=require("./socket/socket")
const https = require('https');
const fs = require('fs');
const path=require("path");
const localhost_key_pem_direname=path.join(__dirname,"./ssl/localhost-key.pem");
const localhost_pem_direname=path.join(__dirname,"./ssl/localhost.pem");
const options = {
    key: fs.readFileSync(localhost_key_pem_direname),
    cert: fs.readFileSync(localhost_pem_direname),
};
const server = https.createServer(options, app);
require('./routes/routes');
const PORT =process.env.PORT||9000;
server.listen(PORT, () => {
  connection();
  initializeSocket(server);
  console.log(`Server listening on port ${PORT}`);
  sendPushNotifications();
});
