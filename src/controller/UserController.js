const user = require('../model/User');

module.exports = {
    async index(req, res) {
        const result = await user.find();
        return res.json(result);
    },

    async store(req, res) {
        const result = await user.create(req.body)
        return res.json(result)
    },

    async findUserById(req, res){
        const result = await user.findById(req.params.id);
        return res.json(result); 
    },

    async putUserById(req, res){
        const result = await user.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(result);
    },
    
    async remove(req, res){
        await user.findByIdAndRemove(req.params.id).exec();
        return res.json({message: `User ${req.params.id} removed.`});
    },

}
