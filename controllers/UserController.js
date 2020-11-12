const User = require('../models/user');

const AddUser = async (request, response) => {
    try {
        const user = await new User(request.body)
        await user.save()
        return response.status(201).json({
            user,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

module.exports = {
    AddUser,
}