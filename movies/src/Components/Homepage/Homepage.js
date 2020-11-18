import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import Sidebar from './SideBar'

import Img from './moviePoster.jpg'

let url = 'https://mernmovies.herokuapp.com/api/collections'

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    fetchMovies = () => {
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

    render() {
        return (

            <div style={{ width: "120%", height: "100vh", color: "red", paddingTop: 10, marginRight: "500px" , backgroundColor: "#D3D3D3" ,textAlign: "center", border: ".5px dotted black" }}><h1>MOVIE.INC</h1>
                <Row style={{ height: "60%", width: "85%", marginTop: 15, color: "black", textAlign: "center" }} noGutters >
                    <Col xs="3" style={{ marginTop: 5, border: "5px solid red", textAlign: "center" }}>
                        <Sidebar selectList={this.selectList} />
                    </Col>

                    <Col style={{ width: "20%", height: "auto", marginTop: "0" }}>
                        <img src={Img} alt=" pic" />
                    </Col>
                </Row>


            </div >


        )
    }
}
export default Homepage

//test