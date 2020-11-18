import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';

export class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
            , dropdown: "",
            sign: false,
            login: false,
            email: '',
            password: '',
            isLoggedIn: false
        }

        this.handleLogOut = this.handleLogOut.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    componentDidMount() {
        if (localStorage.token) {
            this.setState({
                isLoggedIn: true
            })
        } else {
            this.setState({
                isLoggedIn: false
            })
        }
    }

    handleLogOut() {
        this.setState({
            email: '',
            password: '',
            isLoggedIn: false
        })
        localStorage.clear()
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUp(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/auth/signup', {
            headers: { "Content-Type": "application/json" },
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                localStorage.token = response.data.token
                this.setState({ isLoggedIn: true })
            })
            .catch(err => console.log(err))
    }

    handleLogIn(e) {
        e.preventDefault()
        axios.post('http://localhost:52458/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                localStorage.token = response.data.token
                this.setState({ isLoggedIn: true })
            })
            .catch(err => console.log(err))
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

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    render() {
        const { login, sign } = this.state;
        return (
            <>
                <Form inline onSubmit={this.submitForm}>
                    <Button style={{ margin: 5, fontWeight: "bold", backgroundColor: "#F5F5F5", color: "red", border: "2px solid red" }} size="md" type="submit" onClick={this.onOpenModal} >Sign Up</Button>
                    <Button style={{ margin: 5, fontWeight: "bold", backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red" }} size="md" type="submit" onClick={this.onOpenModalLogin} >Login</Button>
                    <Button style={{ margin: 5, fontWeight: "bold", backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red", marginRight: "125px" }} size="md" type="submit" onClick={this.handleLogOut} >Logout</Button>
                </Form>

                <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <form>
                            <div className="form-group text-left">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    onChange={this.handleInput}
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password"
                                    onChange={this.handleInput}
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={this.handleSignUp}
                                className="btn btn-primary"
                            >
                                Register
                </button>
                        </form>
                    </div>

                </Modal>

                {/* <!-- signUp End -->
<!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalclose}>

                    <div className="modal-body">
                        <h2>Login and Get <span>Started</span></h2>
                        <span className="subtitle">Just fill in the form below</span>
                        <form>
                            <div className="form-group text-left">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    onChange={this.handleInput}
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password"
                                    onChange={this.handleInput}
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={this.handleLogIn}
                                className="btn btn-primary"
                            >
                                Log in
                </button>
                        </form>
                    </div>
                </Modal>

            </>



        )
    }
}
export default withRouter(LoginForm)