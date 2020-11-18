import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap'
import Sidebar from '../Homepage/SideBar'


export class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    setType = () => {
        if (this.props.method === "POST") {
            return (<div> <h4>Please enter the details of the review you wish to add.</h4>
                <Form.Control type="input" placeholder="Title (required)" name="reviewInfo0" onChange={this.pleaseWork} />
            </div>)
        }
        else if (this.props.method === "PATCH") {
            return (<div> <h4>Please enter the details you wish to update!</h4>
                <Form.Control type="input" placeholder="Title (required)" name="reviewInfo1" onChange={this.pleaseWork} />
            </div>)
        }
        else if (this.props.method === "DELETE") {
            return (<div> <h4>Please enter the title of the review you wish to delete.</h4>
                <Form.Control type="input" placeholder="Title (required)" name="reviewInfo2" onChange={this.pleaseWork} />
            </div>)
        }
    }

    setReviewForm = () => {
        if (this.props.method !== "DELETE") {
            return (<div >
                <h5>What is your rating?</h5>
                <Form.Check inline size="sm" type="radio" name="audience" label="1" onClick={() => this.setCheckbox("audience", true)} />
                <Form.Check inline size="sm" type="radio" name="audience" label="2" onClick={() => this.setCheckbox("audience", true)} />
                <Form.Check inline size="sm" type="radio" name="audience" label="3" onClick={() => this.setCheckbox("audience", true)} />
                <Form.Check inline size="sm" type="radio" name="audience" label="4" onClick={() => this.setCheckbox("audience", true)} />
                <Form.Check inline size="sm" type="radio" name="audience" label="5" onClick={() => this.setCheckbox("audience", true)} />
                <Form.Control size="sm" type="input"  placeholder="Title" name="title" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Your Review (Up to 100 characters)" name="review" onChange={this.inputChange} />
            </div>)
        }
    }

    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    pleaseWork = e => {
        this.setState({
            name: e.target.value
        })
    }

    setCheckbox = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    checkImage = (e) => {
        e.preventDefault()
        if (this.state.image) {
            let imgArray = this.state.image.split(",")
            let finalArray = imgArray.map(val => {
                let trimmed = val.trim()
                return trimmed
            })
            this.setState({
                image: finalArray
            }, () => { this.submitReviewForm(e) })
        } else { this.submitReviewForm(e) }

    }

    submitReviewForm = (e) => {
        console.log(this.props)

        let film = ""
        if (this.props.method === "POST") {
            film = `https://mernmovies.herokuapp.com/api/reviews${this.props.type}`
        }
        else if (this.props.method === "PATCH") {
            film = `https://mernmovies.herokuapp.com/api/reviews/:id${this.props.type}${this.state.name}`
        }
        else {
            film = `https://mernmovies.herokuapp.com/api/reviews/:id${this.props.type}${this.state.name}`
        }

        console.log(film)
        const options = {
            "method": this.props.method
            , "headers": { "Content-Type": "application/json" }
            , body: JSON.stringify(this.state)
        }

        fetch(film, options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.props.onSuccess({
                    newTitle: res.Title
                    , success: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() {
        return (
            <Row style={{ height: "60%", width: "100%", marginTop: 15, color: "black", textAlign: "center" }} noGutters >
                <Col xs="4" style={{ marginTop: 5, border: "5px solid red", textAlign: "center" }}>
                    <Sidebar selectList={this.selectList} />
                </Col>

                <Col style={{ width: "50%", height: "auto", marginTop: "0" }}>
                    <div style={{ width: "100%", height: "auto", marginLeft: "150px", border: "1px solid black", padding: "15px" }}>
                        <Form onSubmit={this.checkImage}>
                            {this.setType()}
                            {this.setReviewForm()}
                            <Button style={{ marginTop: 20, backgroundColor: "#F5F5F5", color: "#333333", border: "1.5px solid green" }} type="submit" >Submit</Button>
                        </Form>
                    </div>
                </Col>

            </Row>




        )
    }
}


export default ReviewForm
