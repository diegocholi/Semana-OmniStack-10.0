const mongoose = require('mongoose')
const PointSchema = require('../utils/PointSchema')

/** *********************************************
 * O esquema é a estrutura de medados da tabela *
 ************************************************/
const userSchema = new mongoose.Schema({
    login: String,
    github_username: String,
    avatar_url: String,
    // avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('user', userSchema)
