import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 1,
            error: null
        };
    }

    decrement = () => {

        if (this.state.input <= 1) {
            this.setState({ error: "1 is the minimum" })
        } else {
            this.setState({ input: this.state.input - 1 });
        }
        this.setState({ input: this.state.input - 1 });
    }

    increment = () => {

        if (this.state.input >= 50) {
            this.setState({ error: "50 is the maximum" })
        } else {
            this.setState({ input: this.state.input + 1 });
        }
    }

    change = (e) => {
        let enteredValue = parseInt(e.target.value, 10);
        this.setState({ input: enteredValue })
    }

    submit = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:3000/api/fibonacci/${this.state.input}`, {
            method: 'GET'
        }).then(res => {
            if (!res.ok) {
                this.setState({ error: "Sever error." })
            }
            return res.json()
        }).then(res => {
                this.props.handleResults(res);
        }).catch(err => {
            this.setState({ error: "Sever error." })
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                    <p>{this.state.error}</p>
                    <input id="input" name="input" type="text" min={0} onChange={this.change} value={this.state.input} />
                    <button type="button" onClick={this.increment}>+</button>
                    <button type="button" onClick={this.decrement}>-</button>
                    <button type="submit">Submit</button>
            </form>
        );
    }
}


export default Form;