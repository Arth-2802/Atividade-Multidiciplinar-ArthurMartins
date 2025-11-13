// Bridge file to export the Express app for Vercel Serverless Function under /api
const app = require('../server');
module.exports = app;
