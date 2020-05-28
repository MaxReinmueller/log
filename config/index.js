require('dotenv').config()

const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASS;

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds257752.mlab.com:57752/heroku_bzbd8smb`;

module.exports = MONGODB_URI;