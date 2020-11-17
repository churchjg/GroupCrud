import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
            , dropdown: "",
            sign: false,
            login: false,
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
                    <Button style={{ margin: 5, backgroundColor: "#F5F5F5", color: "red", border: "2px solid red" }} size="md" type="submit" onClick={this.onOpenModal} >Sign Up</Button>
                    <Button classname="login" style={{ margin: 5, backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red" }} size="md" type="submit" onClick={this.onOpenModalLogin} >Login</Button>
                    <Button style={{ margin: 5, backgroundColor: "#F5F5F5", color: "#333333", border: "2px solid red" }} size="md" type="submit" >Logout</Button>
                </Form>

                <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                {/* <!-- signUp End -->
<!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalclose}>

                    <div className="modal-body">
                        <h2>Login and Get <span>Started</span></h2>
                        <span className="subtitle">Just fill in the form below</span>
                        <form className="contact-form form-validate4" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal>

            </>



        )
    }
}
export default withRouter(LoginForm)