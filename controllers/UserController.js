const User = require('../models/user');
const {
    checkPassword,
    generatePassword
  } = require('../middleware/PasswordHandler')


//=========
//create a user
const AddUser = async (request, response) => {
    try {
        const body = request.body
        const password_digest = await generatePassword(body.password)
        const user = new User({
        name: body.name,
        email: body.email,
        password_digest
    })
      user.save()
      response.send(user)
    } catch (error) {
      throw error
    }
}

const SignInUser = async (request, response, next) => {
    try {
      const user = await User.findOne({email: request.body.email})
      console.log(user)
      if (
        user &&
        (await checkPassword(request.body.password, user.password_digest))
      ) {
        const payload = {
          _id: user._id,
          name: user.name
        }
        response.locals.payload = payload
        return next()
      }
      response.status(401).send({msg: 'Unauthorized'})
    } catch (error) {
      throw error
    }
  }

  const RefreshSession = (request, response) => {
    try {
      const token = response.locals.token
      response.send({user: jwt.decode(token), token: response.locals.token})
    } catch (error) {
      throw error
    }
  }
//=========

// const AddUser = async (request, response) => {
//     try {
//         const user = await new User(request.body)
//         await user.save()
//         return response.status(201).json({
//             user,
//         });
//     } catch (error) {
//         return response.status(500).json({ error: error.message })
//     }
// }


const GetUser = async (request, response) => {
    try {
        const {id} = request.params
        const user = await User.findById(id)
        if (user) {
            return response.status(200).json({user})
        }
        return response.status(404).send('User does not exist')
    } catch (error) {
        return response.status(500).send(error.message)
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
    SignInUser,
    RefreshSession,
    AddUser,
    GetUser,
    DeleteUser,
    UpdateUser
}

