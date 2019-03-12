// Code ControlledInput Component Here
import React, {Component} from 'react'

class ControlledInput extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomeWhere(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default ControlledInput
