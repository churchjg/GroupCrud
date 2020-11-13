import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

let url = ""

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    render() {
        return (
           <h1>this is the Homepage</h1>
        )
    }
}
export default Homepage