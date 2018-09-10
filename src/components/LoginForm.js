import React, { Component } from 'react';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        //TODO: create a ValidatedComponent which handles display of validation?

        this.state = {
            username: {
                text: '',
                touched: false,
                validators: { required: true, minLength: 5 },
                errorMsg: ''
            },
            password: {
                text: '',
                touched: false,
                validators: {
                    //in order of precedence
                    required: true,
                    minLength: 5,
                    //maxLength: 8,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
                },
                errorMsg: ''
            },
            formValid: false
        };
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.login}>
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.onInputChange}
                            value={this.state.username.text}
                            placeholder="ex. jamesqquick"
                            className={`form-control ${
                                this.state.username.touched &&
                                this.state.username.errorMsg
                                    ? 'form-control__error '
                                    : ''
                            } ${
                                this.state.username.touched &&
                                !this.state.username.errorMsg
                                    ? 'form-control__success'
                                    : ''
                            }`}
                            required
                        />
                        <small
                            className={
                                'form__validate-msg ' +
                                (!this.state.username.touched ||
                                !this.state.username.errorMsg
                                    ? 'hidden'
                                    : '')
                            }
                        >
                            {this.state.username.errorMsg}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            cols="30"
                            rows="10"
                            onChange={this.onInputChange}
                            value={this.state.password.text}
                            placeholder=""
                            className={`form-control ${
                                this.state.password.touched &&
                                this.state.password.errorMsg
                                    ? 'form-control__error '
                                    : ''
                            } ${
                                this.state.password.touched &&
                                !this.state.password.errorMsg
                                    ? 'form-control__success'
                                    : ''
                            }`}
                            required
                        />
                        <small
                            className={
                                'form__validate-msg ' +
                                (!this.state.password.touched ||
                                !this.state.password.errorMsg
                                    ? 'hidden'
                                    : '')
                            }
                        >
                            {this.state.password.errorMsg}
                        </small>
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        disabled={!this.state.formValid}
                    />
                </form>
            </div>
        );
    }

    onInputChange = e => {
        const name = e.target.name;
        const text = e.target.value;
        const errorMsg = this.validateInput(text, this.state[name].validators);
        const updatedInputState = {
            text,
            errorMsg,
            touched: true,
            validators: this.state[name].validators
        };

        this.setState({ [name]: updatedInputState }, () => {
            this.validateForm();
        });
    };

    validateInput(value, validators) {
        for (let key in validators) {
            switch (key) {
                case 'required':
                    if (value.length < 1) {
                        return `field is required`;
                    }
                    break;
                case 'minLength':
                    if (value.length < validators[key]) {
                        return `must be ${validators[key]} characters long`;
                    }
                    break;
                case 'maxLength':
                    if (value.length > validators[key]) {
                        return `cannot be more than ${
                            validators[key]
                        } characters long`;
                    }
                    break;
                case 'pattern':
                    if (!validators[key].test(value)) {
                        return `input must match ${validators[key]}`;
                    }
                    break;
            }
        }
        return '';
    }

    validateForm = () => {
        const formValid =
            !this.state.username.errorMsg &&
            this.state.username.touched &&
            !this.state.password.errorMsg &&
            this.state.password.touched;
        this.setState({ formValid });
    };

    login = e => {
        console.log('Submitting form', this.state);
        e.preventDefault();
        //simulate 2 seconds and show spinner?
        this.setState({
            username: {
                text: '',
                touched: false,
                validators: { required: true, minLength: 5 },
                errorMsg: ''
            },
            password: {
                text: '',
                touched: false,
                validators: {
                    required: true,
                    minLength: 5,
                    maxLength: 8,
                    pattern: /cat/
                },
                errorMsg: ''
            },
            formValid: false
        });
    };
}
