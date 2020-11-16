import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import MovieForm from './MovieForm'


export class SubmissionForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newName: ""
            ,success: ""
            ,type: ""
            ,method: this.props.method
        }
        this.baseState = {
            newName: ""
            ,success: ""
            ,type: ""
            ,method: this.state.method
        }
    }

    onSuccess = success => {
        console.log("success fired")
        this.setState({
            success: success.success
            ,newName: success.newName
        })
    }

    successDisplay = () => {
        if (this.props.method === "POST"){
            return <div style={{margin: 20}}>
            <h3>Success! The new item name is {this.state.newName}</h3>
            <Button style={{marginTop: 20, backgroundColor: "#F5F5F5", color: "#333333", border: "none"}} type="button" onClick={this.resetPage}>Submit Another New Movie</Button>
            </div>
        }
        if (this.props.method === "PUT"){
            return <div style={{margin: 20}}>
            <h3>Success! The movie {this.state.newName} has been updated.</h3>
            <Button style={{marginTop: 20, backgroundColor: "#F5F5F5", color: "#333333", border: "none"}} type="button" onClick={this.resetPage}>Submit Another Update</Button>
            </div>
        }
        if (this.props.method === "DELETE"){
            return <div style={{margin: 20}}>
            <h3>Success! The movie {this.state.newName} has been deleted.</h3>
            <Button style={{marginTop: 20, backgroundColor: "#F5F5F5", color: "#333333", border: "none"}} type="button" onClick={this.resetPage}>Delete Another Movie</Button>
            </div>
        }
    }

    setFormType = e =>{
        e.preventDefault()
        this.setState({
            type: e.target.value
        })
    }

    resetPage = () => {
        console.log("fired")
        this.setState(this.baseState)
    }

    formType = () =>{
        if (this.props.method === "POST"){
            return <h3>Choose "Edit Movies" in the Dropdown Menu to add a new Movie</h3>
        }
        if (this.props.method === "PUT"){
            return <h3>Click "Edit Movies" in the Dropdown Menu to update a Movie</h3>
        }
        if (this.props.method === "DELETE"){
            return <h3>Select "Edit Movies" in the Dropdown Menu to delete a Movie</h3>
        }
        
    }

    displayForm = () => {

        if (this.state.type === "movieInfo"){
            return <MovieForm type={this.state.type}  method={this.state.method} onSuccess={this.onSuccess} />
        }

        else {return null}
    }

    render() {
        if (this.state.success !== true){
        return (<div style={{ width: "60%", marginLeft: 20}}>
            {this.formType()}
            <Form style={{marginBottom: 10}}>
                <Form.Control size="sm" as="select" id="basic-nav-dropdown" name="movieInfo" onChange={this.setFormType}>
                    <option>Select</option>
                    <option value="movieInfo">Edit Movies</option>
                </Form.Control> 
            </Form>
            {this.displayForm()} 
            </div>
        )
        }
        else {return this.successDisplay()}
    }
}

export default SubmissionForm