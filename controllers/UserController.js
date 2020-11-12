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

const DeleteUser = async (request, response) => {
    try{
        const {id} = request.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send("User Removed")
        }
        throw new Error ("User not found")
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const UpdateUser = async (request, response) => {
    try{
        const {id} = request.params
        await User.findByIdAndUpdate(id, request.body, {new: true}, (error, user) => {
            if (error) {
                response.status(500).send(error)
            }
            if (!user) {
                response.status(500).send('User not found')
            }
            return response.status(200).json(user)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

module.exports = {
    AddUser,
    DeleteUser,
    UpdateUser
}