import React, { Component } from 'react'
import '../styles/Details.css'

import { __GetRecipe } from '../services/RecipeService'
import { __DeleteRecipe } from '../services/RecipeService'
import { __AddReview } from '../services/RecipeService'

import ReviewCard from '../components/ReviewCard'

export default class RecipeDetails extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      error: '',
      reviews: [],
      recipe: null,
    }
  }

  componentDidMount() {
    this.getRecipeDetails()
  }

  getRecipeDetails = async () => {
    const data = await __GetRecipe(this.props.match.params.recipe_id)
    this.setState({
      recipe: {
        _id: data._id,
        title: data.title,
        author: data.author.name,
        prep_time: data.prep_time,
        description: data.description,
        image: data.image,
        cuisine_id: data.cuisine_id,
        reviews: data.reviews
      },
      reviews: [...data.reviews]
    })
  }

  delete = async (recipeId) => {
    try {
      await __DeleteRecipe(recipeId)
      this.props.history.push(`/`)
    } catch (err) {
      console.log(err.response.data)
      this.setState({ error: err.response.data })
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await __AddReview(this.state, this.props.match.params.recipe_id)
      this.setState({
        reviews: [...this.state.reviews, { author: this.props.currentUser, text: this.state.text }],
        text: ""
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { recipe, text, reviews } = this.state
    const imageStyle = {
      backgroundImage: `url(${recipe?.image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "108vh",
      width: "100%",
    }
    const errorStyle = {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
    
    const recentReviews = reviews?.length && reviews.reverse().slice(0, 6)

    if (this.state.error) {
      return (
        <div style={errorStyle}>
          <h1>
            Nope
          </h1>
          <button onClick={() => this.props.history.push('/login')}>
            Login
          </button>
        </div>
      )
    }

    if (this.state.recipe) {
      return (
        <>
          <nav className="navigationD">
            <button className="backButtonRd" onClick={() => this.props.history.push('/')}>Home</button>
            <button className="backButtonRd" onClick={() => this.props.history.goBack()}>Back</button>
          </nav>
          <div className="pageSpreadD">
            <section className="leftSideD">
              <div className="recipeHeaderD">
                <h2 className="recTitleD">{recipe.title}</h2>
                <div className="userButtons">
                  <button className="uB" onClick={() => this.delete(recipe._id)}>Delete</button>
                  <button className="uB" onClick={() => this.props.history.push(`/home/recipes/edit/${recipe._id}`)}>Edit</button>
                </div>
              </div>
              <div className="descriptionD">
                <p>
                  <span>
                    Author:
                  </span>
                  <span>
                    {recipe.author}
                  </span>
                </p>
                <p>
                  <span>
                    Category:
                  </span>
                  <span>
                    {recipe.style}
                  </span>
                </p>
                <p>
                  <span>
                    Preparation Time:
                  </span>
                  <span>
                    {recipe.prep_time}
                  </span>
                </p>
                <p className="descripT">Description:</p>
                <p className="blurb">{recipe.description}</p>
              </div>
              <div className="reviewsD">
                <div>
                  <p className="rTitle">User Reviews</p>
                </div>
                <div className="reviewListD">
                  {recentReviews?.length ? (
                    recentReviews.map((review) => (
                      <div className="reviewBlockD" key={review._id}>
                        <ReviewCard
                          key={review._id}
                          review={review}
                        />
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="entryD">
                  <form className="formBoxD" onSubmit={this.handleSubmit}>
                    <textarea
                      required
                      name="text"
                      type="text"
                      value={text}
                      autoComplete="off"
                      className="typeHereD"
                      style={{resize: "none"}}
                      placeholder=" Leave a Review"
                      onChange={this.handleChange}
                    />
                    <button className="subButtonD" type="submit">POST REVIEW</button>
                  </form>
                </div>
              </div>
            </section>
            <section className="rightSideD">
              <div style={imageStyle}>
              </div>
            </section>
          </div>
        </>
      )
    }
    return <h6>LOADING</h6>
  }
}