require('dotenv').config()

const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASS;

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@log-dcuyc.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;