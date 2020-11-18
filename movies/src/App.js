import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './Components/Homepage/Navbar'
import Homepage from './Components/Homepage/Homepage'
import { Route } from 'react-router-dom'
import SubmissionForm from './Components/Forms/SubmissionForm'
import SubmissionReviewForm from './Components/Forms/SubmissionReviewForm'
import LoginForm from './Components/Forms/LoginForm'
import Title from './Components/Homepage/Title'
import SearchForm from '../src/Components/Forms/SearchForm'
import axios from 'axios';


// import Sidebar from './Components/Homepage/SideBar'

//save that array of movies into "title save"

let url = "https://mernmovies.herokuapp.com"

class App extends Component {
  constructor() {
    super()
    this.state = {
      dropdownSelection: ""
      , formInput: ""
      , titles: []

    }

  }

async fetchMovies() {
  console.log("search")
const data = await axios.get(`${url}/api/movies`)
console.log(data);
    }

  fetchMoviesTwo = () => {
    fetch(`${url}/`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          ready: true
          , movies: res
        })
      })

  }
  componentDidMount = () => {
    this.fetchMovies()
  }




  selectList = listName => {
    this.setState({
      browseSelection: listName
    })
  }


  setDropdown = selection => {
    this.setState({
      dropdownSelection: selection
    })
  }

  setFormSelection = (input, optional) => {
    if (input.input !== undefined) {
      this.setState({
        dropdownSelection: input.dropdown
        , formInput: input.input
      })
    }
    else {
      this.setState({
        formInput: input
        , dropdownSelection: optional
      })
    }
  }

  render(props) {
    return (
      <Container fluid style={{ padding: 0 }} >

        <Row style={{ height: "25%" }} >
          <Col >
            <NavBar dropdownSelection={this.setDropdown} sendInput={this.setFormSelection} />
          </Col>
        </Row>
        <Row>
          <Col style={{ height: "95%", overflow: "scroll" }}>
            <Route path="/"
              render={() => <Homepage url={url} />}
              exact />

            {/* <Row style={{ height: "85%", marginTop: 15 }} noGutters >
          <Col xs="2" style={{ marginTop: 5, marginLeft: 15 , border: "5px solid red"}}>
            <Sidebar selectList={this.selectList} />
          </Col>
        </Row> */}

            {/* I need a submission form to CRUD collections and reviews
        Another form for login/logout */}

            <Route path="./controllers/auth"
              render={() => <LoginForm method="POST" />}
            />
            {/* <Route path="./controllers/auth"
            render={() => <LogoutForm  method="POST"/>}
            /> */}

            <Route path={`/movies${this.state.browseSelection}`}
              render={() => <Title listName={this.state.browseSelection} url={url} setNameId={this.state.movies} />}
              exact
            />
               <Route path="/movies"
              render={() => <SearchForm onChange={this.handleInputChange}/>}
            />

            <Route path="/api/collections"
              render={() => <SubmissionForm method="POST" />}
            />
            <Route path="/api/collections/:slug"
              render={() => <SubmissionForm method="PATCH" />}
            />
            <Route path="/api/collections/:slug"
              render={() => <SubmissionForm method="DELETE" />}
            />
            <Col>
              <Route path={`/api/reviews${this.state.type}${this.state.method}${this.onSuccess}`}
                render={() => {
                  if (this.props.method === "POST") {
                    return <SubmissionReviewForm method={this.props.method}/>
                  }
                }
              } />
            </Col>
            <Col>
            <Route path={`/api/reviews/:id${this.state.type}${this.state.method}${this.onSuccess}`}
                render={() => {
                  if (this.props.method === "PATCH") {
                    return <SubmissionReviewForm method={this.props.method}/>
                  }
                }
              } />
            </Col>
            <Col>
            <Route path={`/api/reviews/:id${this.state.type}${this.state.method}${this.onSuccess}`}
                render={() => {
                  if (this.props.method === "PATCH") {
                    return <SubmissionReviewForm method={this.props.method}/>
                  }
                }
              } />
            </Col>
          </Col>
        </Row>
      </Container>

    )
  }
}


export default App;
