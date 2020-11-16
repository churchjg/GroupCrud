import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './Components/Homepage/Navbar'
import Homepage from './Components/Homepage/Homepage'
import { Route } from 'react-router-dom'
import SubmissionForm from './Components/Forms/SubmissionForm'

// import Sidebar from './Components/Homepage/SideBar'

let url = "https://mernmovies.herokuapp.com/api/collections"

class App extends Component {
  constructor() {
    super()
    this.state = {
      dropdownSelection: ""
      , formInput: ""
    }
    this.path = window.location.pathname
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
          
        {/* <Row style={{ height: "85%", marginTop: 15 }} noGutters >
          <Col xs="2" style={{ marginTop: 5, marginLeft: 15 , border: "5px solid red"}}>
            <Sidebar selectList={this.selectList} />
          </Col>
        </Row> */}
         <Route path="/"
            render={() => <SubmissionForm  method="POST"/>}
            />
            <Route path="/"
            render={() => <SubmissionForm  method="PUT"/>}
            />
            <Route path="/"
            render={() => <SubmissionForm  method="DELETE" />}
            />
          </Col>
        </Row>
      </Container>

    )
  }
}


export default App;
