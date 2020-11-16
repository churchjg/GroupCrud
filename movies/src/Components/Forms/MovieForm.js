import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class MovieForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    setType = () =>{
        if (this.props.method === "POST"){
            return <h4>Please enter the details of what you wish to add!</h4>
        }
        if (this.props.method === "PATCH"){
            return (<div> <h4>Please enter the details you wish to update!</h4>
            <Form.Control type="input" placeholder="Name (required)" name="add" onChange={this.pleaseWork} />
            </div>)
        }
        if (this.props.method === "DELETE"){
            return (<div> <h4>Please enter the name of the collection or review you wish to delete.</h4>
            <Form.Control type="input" placeholder="Name (required)" name="delete" onChange={this.pleaseWork} />
            </div>)
        }
    }

    setForm = () => {
        if (this.props.method !== "DELETE"){
            return ( <div >
                <Form.Control size="sm" type="input" placeholder="Title" name="title" onChange={this.inputChange} />
                <h5>Is this a Collection?</h5>
                <Form.Check inline size="sm" type="radio" name="released" label="Yes"  onClick={() => this.setCheckbox("released", true)} />
                <Form.Check inline size="sm" type="radio" name="released" label="No"  onClick={() => this.setCheckbox("released", false)} />
                <Form.Control size="sm" type="input" placeholder="Titles" name="title" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Major Genre" name="genre" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Your Rating" name="rating" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Creative Type (Fantasy, Historial Fiction, etc.) " name="creative" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Release Date" name="date" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Movie Poster" name="image" onChange={this.inputChange} />
                <h5>Is this a rating?</h5>
                <Form.Check inline size="sm" type="radio" name="audience" label="Yes"  onClick={() => this.setCheckbox("audience", true)} />
                <Form.Check inline size="sm" type="radio" name="audience" label="No"  onClick={() => this.setCheckbox("audience", false)} />
                <Form.Control size="sm" type="input" placeholder="Title" name="title" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Your Rating" name="rating" onChange={this.inputChange} />
               
                
            </div>)
        }
    }

    inputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    pleaseWork = e => {
        this.setState({
            name: e.target.value
        })
    }
    
    setCheckbox = (name, value) =>{
        this.setState({
            [name]: value
        })
    }

    checkImage = (e) => {
        e.preventDefault()
        if (this.state.image){
            let imgArray = this.state.image.split(",")
             let finalArray = imgArray.map(val =>{
                let trimmed = val.trim()
                return trimmed
            })
             this.setState({
                 image: finalArray
             }, () => {this.submitForm(e)})
        } else {this.submitForm(e)}

    }

    submitForm = (e) =>{
        console.log(this.props)
        
        let film = ""
        if (this.props.method === "POST"){
            film = `https://mernmovies.herokuapp.com/api/collections${this.props.type}`
        }
        else if (this.props.method === "PATCH") {
            film = `https://mernmovies.herokuapp.com/api/collections/:slug${this.props.type}${this.state.name}`
        }
        else {
            film = `https://mernmovies.herokuapp.com/api/collections/:slug${this.props.type}${this.state.name}`
        }
        
        console.log(film)
        const options = {
            "method": this.props.method
            ,"headers" : { "Content-Type" : "application/json" }
            ,body: JSON.stringify(this.state)
        }

        fetch(film, options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.props.onSuccess({
                    newTitle: res.Title
                    ,success: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Form onSubmit={this.checkImage}>
                {this.setType()}
                {this.setForm()}
                <Button style={{marginTop: 20, backgroundColor: "#F5F5F5", color: "#333333", border: "1.5px solid green"}} type="submit" >Submit</Button>
            </Form>
        )
    }
}


export default MovieForm
    