import React, { Component } from 'react';
import { Typography , TextField , Paper } from '@material-ui/core'

export default class App extends Component { 
  state = {
    title: '',
    exercises : []
  }
  handleChange = ({
    target: {
      name,
      value
    }
  }) =>
    this.setState({
      [name]: value
    });
  
  render() { 
    const { title } = this.state
    return (
    <Paper>
    <Typography variant='display3' align='center' gutterBottom>Exercises</Typography>
      <form>
        <TextField
          name='title'
          label='Exercises'
          value={title}
          onChange={this.handleChange}
          margin='normal'/>
      </form>
      </Paper>
      );
  }
};
