require('dotenv').config();

module.exports = {
  datasource: {
    url: process.env.MIGRATE_DATABASE_URL || process.env.DATABASE_URL
  }
};