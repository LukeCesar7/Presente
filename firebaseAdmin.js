const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json'); // Baixe isso do Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://database-a34d2-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;
