// import Axios from 'axios'
// import React, {Component} from 'react'

// export default class RecipeDetails extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       recipeId: props.match.params.recipeId,
//       recipeDetails: {}
//     }
//   }

//   componentDidMount() {
//     this.getRecipeDetails()
//   }

//   getRecipeDetails = async () => {
//     const response = await Axios.get(
//       `${this.state.recipeId}`
//     )
//     this.setState({recipeDetails: response.data})
//     // console.log(res.data)
//   }


//   render() {
//     const {recipeDetails} = this.state
//     return (
//       <div>
//         <section>
//           <div>
//             <img src={recipeDetails.image} />
//           </div>
//         </section>

//         <section>
//           <div>
//             <h2>{recipeDetails.title}</h2>
//             <h2>Published By: {recipeDetails.author}</h2>
//             <h2>Prep Time: {recipeDetails.prep_time}</h2>
//           </div>

//           <div>
//             <p>Instructions: {recipeDetails.description}</p>

//             <p>Reviews: {recipeDetails.reviews}</p>

//           </div>

//         </section>

//       </div>
//     )
//   }
// }

// //reviews array?