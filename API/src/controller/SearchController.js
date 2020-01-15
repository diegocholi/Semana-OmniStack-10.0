const Dev = require('../models/User')
const parseStringAsArray = require('../utils/passStringAsArray')

/** **************************************
 * Nomenclatura para arquivo controller: *
 * [index, show, store, update, destroy] *
 *****************************************/

module.exports = {
    async index(request, response){
        // Busca por localização e tecnologia
        const { latitude, longitude, tecs } = request.query
        const techsArray = parseStringAsArray(tecs)
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 1000
                }
            }
        })

        return response.json({devs: devs})
    }
}