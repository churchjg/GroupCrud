import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './Components/Navbar'
import Homepage from './Components/Homepage'
import { Route } from 'react-router-dom'

let url = ""

class App extends Component {
  constructor() {
    super()
    this.state = {
      dropdownSelection: ""
      , formInput: ""
    }
  }

  setStateFromUrl = () => {
    let pathArray = this.path.split('/')
    pathArray = pathArray.filter(val => (val !== ""))
    if (pathArray[1] === "movie") {
      this.fetchMovie()
    } else {
      console.log("no path")
    }
  }


  componentDidMount = () => {
    this.setStateFromUrl()
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
          </Col>
        </Row>
      </Container>

    )
  }
}


export default App;
