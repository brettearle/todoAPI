const env = require('dotenv')
env.config()

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

initializeApp({
  credential: applicationDefault(),
  databaseURL: process.env.DB_URL
});

const db = getFirestore()

module.exports = db