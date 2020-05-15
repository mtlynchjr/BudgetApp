// Run using Sequelize
let Sequelize = require('sequelize')

// Running locally or at Heroku?
let env = process.env.NODE_ENV || 'development'
let config = require(__dirname + '/../config.json')[env]

// Create empty DB
let db = {}

// If Heroku/If Local
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config)
}

// Reads from model and record.js
let model = sequelize['import']('./record.js')
db[model.name] = model

db.sequelize = sequelize
db.Sequelize = Sequelize

// Exports for use elsewhere within program
module.exports = db