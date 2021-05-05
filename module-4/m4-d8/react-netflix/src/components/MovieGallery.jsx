import React from "react"
import { Col, Container, Row } from "react-bootstrap"

// document.body.style = "background: black;";

class MovieGallery extends React.Component {
  state = {
    gallery: [],
  }

  componentDidMount = async () => {
    console.log("fetching data")
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=c65cdbe8&s=${this.props.search}`
      )

      if (response.ok) {
        let data = await response.json()
        let last6 = data.Search.slice(-6)
        this.setState({ gallery: last6 })
        console.log(last6)
      }
    } catch (error) {
      console.log(error)
    }
  }
  componentDidUpdate = async (prevProps) => {
    console.log("fetching data")
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=c65cdbe8&s=${this.props.search}`
      )

      if (response.ok) {
        let data = await response.json()
        let last6 = data.Search.slice(-6)
        if (prevProps.search !== this.props.search) {
          this.setState({ gallery: last6 })
        }
        console.log(last6)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log("rendering movies")
    return (
      <Container className="my-5">
        <h5 className="text-white">{this.props.galleryTitle}</h5>
        <Row>
          {this.state.gallery.map((movie) => {
            return (
              <Col xs={2}>
                <img src={movie.Poster} className="img-fluid" />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default MovieGallery
