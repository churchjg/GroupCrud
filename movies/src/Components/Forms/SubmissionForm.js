import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import MovieForm from './MovieForm'
import Sidebar from '../Homepage/SideBar'
import { Row, Col } from 'react-bootstrap'


export class SubmissionForm extends Component {
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
            ,
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
            return <div style={{ margin: 20, alignItems: "right", textAlign: "right" }}>
                <h3 style={{textAlign: "right"}}>Success! Your item has been updated. {this.state.newTitle}</h3>
                <Button style={{ marginTop: 20, backgroundColor: "#F5F5F5", color: "green", border: "2px solid black" }} type="button" onClick={this.resetPage}>Add More</Button>
            </div>
        }
        if (this.props.method === "PATCH") {
            return <div style={{ margin: 20, alignItems: "center" }}>
                <h3>Success! The movie {this.state.newTitle} has been updated.</h3>
                <Button style={{ marginTop: 20, backgroundColor: "#F5F5F5", color: "green", border: "2px solid black" }} type="button" onClick={this.resetPage}>Make Another Update</Button>
            </div>
        }
        if (this.props.method === "DELETE") {
            return <div style={{ margin: 20, alignItems: "center"}}>
                <h3>Success! The movie {this.state.newTitle} has been deleted.</h3>
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
            return <h3>Choose "Add" in the Dropdown Menu to create a new Collection or Review</h3>
        }
        if (this.props.method === "PATCH") {
            return <h3>Click "Update" in the Dropdown Menu to update a Collection or Review</h3>
        }
        if (this.props.method === "DELETE") {
            return <h3>Select "Delete" in the Dropdown Menu to delete a Collection or Review</h3>
        }

    }

    displayForm = () => {

        if (this.state.type === "movieInfo") {
            return <MovieForm type={this.state.type} method={this.state.method} onSuccess={this.onSuccess} />
        }

        else { return null }
    }

    render() {
        if (this.state.success === true) {
            return (<div style={{ width: "60%", marginLeft: 20 }}>
                {this.formType()}
                <Form style={{ marginBottom: 10 }}>
                    <Form.Control size="sm" as="select" id="basic-nav-dropdown" name="movieInfo" onChange={this.setFormType}>
                        <option>Select</option>
                        <option value="movieInfo">Add</option>
                        <option value="movieInfo">Update</option>
                        <option value="movieInfo">Delete</option>
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
                        <Col xs="3" style={{ marginTop: 5, border: "5px solid red", textAlign: "center" }}>
                            <Sidebar selectList={this.selectList} />
                        </Col>
                        {this.successDisplay()}
                    </Row>
                </div>
            )
        }
    }
}

export default SubmissionForm