// import React from 'react'

// const UserCard = ({onClick, name}) => (
//   <div onClick={onClick}>
//     <div>
//         <h3>Hello {name}</h3>
//     </div>
//   </div>
// )

// export default UserCard



// const response = await ApiClient.get(`/users/search/${userId}`)



import React, {Component} from 'react'
import {__GetProfile} from '../services/UserService'


export default class UserCard extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile = async () => {
    const data = await __GetProfile(this.props.match.params.userId)
    this.setState({user: data.user})
    console.log(data)
  }

  render() {
    const {user} = this.state
    return (
      
      <div>
        <section>
          <div>Hello {user.name}</div>
        </section>
      </div>
    )
  }
}

