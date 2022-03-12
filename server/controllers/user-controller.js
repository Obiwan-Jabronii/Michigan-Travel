const { User} = require('../models')

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const userFound = await User.findOne({
            $or: [{_id: user ? user._id : params.id}, { username: params.username}],
        })
        if(!userFound) {
            return res.status(400).json({ message:'Cannot find a user with that name '})
        }
        res.json(userFound);
    },
    
    async createUser({body}, res) {
        const user = await User.create(body);

        if(!user) {
            return res.status(400).json({ message: 'Something went wrong. Please try again.'})
        }
        const token = signToken(user);
        res.json({ token,user }); 
    },

    async saveLocation({user, body}, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                {_id: user._id },
                { $addToSet: {savedLocations: body } },
                { new: true, runValidators: true }
            );
            return res.json(updateUser);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    }
}
