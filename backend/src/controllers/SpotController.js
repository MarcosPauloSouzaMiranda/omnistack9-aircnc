const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res){

        const { tech } = req.query;

        const spots = await Spot.find({techs: tech});

        res.json(spots);

    },

    async store(req, res){
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user){
            return res.status(400).json({msg: 'O usuário não existe!'});
        }

        const spot = await Spot.create({
            thumbnail: req.file.filename,
            company: req.body.company,
            price: req.body.price,
            techs: req.body.techs.split(',').map(tech => tech.trim()),
            user: user_id
        });

        res.json(spot);
    }
}