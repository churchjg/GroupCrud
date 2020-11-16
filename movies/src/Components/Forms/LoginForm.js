import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'

export class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
            , dropdown: ""
        }
    }

    inputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            input: e.target.value
        })
    }

    dropdownChange = e => {
        this.setState({
            dropdown: e.target.value
        })
    }

   

    submitForm = (e) => {
        e.preventDefault()
        if (this.state.dropdown !== "" && this.state.input !== "") {
            this.props.sendInput(this.state)
            // this.props.movies.push(`/api/movies/${this.state.dropdown}${this.state.input}`)
        }
        else { alert("Please select an account option") }
    }

    render() {
        return (
            <Form inline onSubmit={this.submitForm}>
                <Button style={{margin: 5, backgroundColor: "#F5F5F5", color: "red", border: "2px solid red"}} size="md" type="submit" >Sign Up</Button>
                <Button style={{margin: 5, backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red" }} size="md" type="submit" >Login</Button>
                <Button style={{margin: 5, backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red"}} size="md" type="submit" >Logout</Button>
            </Form>
        )
    }
}
export default withRouter(LoginForm)