import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Suggestions from './Suggestions'
import { Col, Row, Container } from 'react-bootstrap'


let url = "https://mernmovies.herokuapp.com/api/collections"


export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: []
            , query: ''
        }
    }

    fetchMovies = () => {
        fetch(`${url}/`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    ready: true
                    , titles: res
                })
            })

    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.fetchMovies()
                }
            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return (

            <Form style={{ alignItems: "center", textAlign: "center"}}>
                <Row style={{ alignItems: "center", textAlign: "center" }}>
                    <Form.Control style={{ margin: "5px", border: "1px solid black", alignItems: "center" }} ref={input => this.search = input} onChange={this.handleInputChange} placeholder='Search by Title' />
                    <Button style={{ margin: "5px", marginLeft: "125px", textAlign: "center", backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red" }} size="md" type="submit" >Search</Button>
                    <Suggestions titles={this.state.titles} />
                </Row>
            </Form>
        )
    }
}
export default SearchForm