import React, { Component } from 'react'

class ClickityClick extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        let newCount = this.state.count + 1
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        }, console.log(this.state.count))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick