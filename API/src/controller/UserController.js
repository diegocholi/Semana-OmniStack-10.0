const axios = require('axios')
const Dev = require('../models/User')
const parseStringAsArray = require('../utils/passStringAsArray')

/** **************************************
 * Nomenclatura para arquivo controller: *
 * [index, show, store, update, destroy] *
 *****************************************/

module.exports = {
    async index(request, response){
        const devs = await Dev.find()
        
        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        const apiResponse = await axios.get(`https://api.github.com/users`)
    
        let dev = await Dev.findOne({github_username})
        
        if(!dev){
            const { login, avatar_url } = apiResponse.data[0]
       
            const location =  {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            
            const arrayTechs = parseStringAsArray(techs)

            dev = await Dev.create({
                login,
                github_username,
                avatar_url,
                techs: arrayTechs,
                location
            })
        
        }
    
        return response.json(dev)
    }
}