import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Sidebar from '../Homepage/SideBar'
import { Row, Col } from 'react-bootstrap'
import ReviewForm from './ReviewForm'



export class SubmissionReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTitle: ""
            , success: ""
            , type: ""
            , method: this.props.method
        }
        this.baseState = {
            newTitle: ""
            , success: ""
            , type: ""
            , method: this.state.method
        }
    }

    onSuccess = success => {
        console.log("success fired")
        this.setState({
            success: success.success
            , newTitle: success.newTitle
        })
    }

    successDisplay = () => {
        if (this.props.method === "POST") {
            return <div style={{ margin: 20, alignItems: "center", textAlign: "center", marginLeft: "250px" }}>
                <h3>Success! Your item has been added.</h3>
                <Button style={{ marginTop: 20, backgroundColor: "#F5F5F5", color: "green", border: "2px solid black" }} type="button" onClick={this.resetPage}>Add More</Button>
            </div>
        }
        if (this.props.method === "PATCH") {
            return <div style={{ margin: 20, alignItems: "center", textAlign: "center", marginLeft: "270px" }}>
                <h3>Success! Your update is complete!</h3>
                <Button style={{ marginTop: 20, backgroundColor: "#F5F5F5", color: "green", border: "2px solid black" }} type="button" onClick={this.resetPage}>Make Another Update</Button>
            </div>
        }
        if (this.props.method === "DELETE") {
            return <div style={{ margin: 20, alignItems: "center", textAlign: "center", marginLeft: "270px" }}>
                <h3>Success! Your item has been deleted.</h3>
                <Button style={{ marginTop: 20, backgroundColor: "#F5F5F5", color: "green", border: "2px solid black" }} type="button" onClick={this.resetPage}>Make Another Deletion</Button>
            </div>
        }
    }

    setFormType = e => {
        e.preventDefault()
        this.setState({
            type: e.target.value
        })
    }

    resetPage = () => {
        console.log("fired")
        this.setState(this.baseState)
    }

    formType = () => {
        if (this.props.method === "POST") {
            return <h3 style={{ margin: "20px" }}>Choose "Add" in the Dropdown Menu to create a new Review</h3>
        }
        else if (this.props.method === "PATCH") {
            return <h3 style={{ margin: "20px" }}>Click "Update" in the Dropdown Menu to update a Review </h3>
        }
        else if (this.props.method === "DELETE") {
            return <h3 style={{ margin: "20px" }}>Select "Delete" in the Dropdown Menu to delete a Review </h3>
        }

    }


    displayForm = () => {

        if (this.state.type === "reviewInfo") {
            return <ReviewForm type={this.state.type} method={this.state.method} onSuccess={this.onSuccess} />
        }
        else { return null }
    }


    render() {
        if (this.state.success !== true) {
            return (<div style={{ width: "60%", marginLeft: 20 }}>
                {this.formType()}
                <Form style={{ marginBottom: 10 }}>
                    <Form.Control size="sm" as="select" id="basic-nav-dropdown" name="reviewInfo" onChange={this.setFormType}>
                        <option>Select</option>
                        <option value="reviewInfo">Add</option>
                        <option value="reviewInfo">Update</option>
                        <option value="reviewInfo">Delete</option>
                    </Form.Control>
                </Form>
                {this.displayForm()}
            </div>
            )
        }
        else {
            return (
                <div style={{ width: "%%", height: "100vh", color: "red", paddingTop: 10, textAlign: "center", border: ".5px dotted black" }}><h1>MOVIE.INC</h1>
                    <Row style={{ height: "60%", width: "100%", marginTop: 15, color: "black", textAlign: "center" }} noGutters >
                        <Col xs="3" style={{ marginTop: 5, marginLeft: "2px", border: "5px solid red", textAlign: "center" }}>
                            <Sidebar selectList={this.selectList} />
                        </Col>
                        {this.successDisplay()}
                    </Row>
                </div>
            )
        }
    }
}

export default SubmissionReviewForm