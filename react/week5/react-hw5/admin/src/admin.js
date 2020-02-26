
const serviceAccount = require("../config/private-admin-key.json");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newapp-de86e.firebaseio.com"
});

module.exports = admin;
  