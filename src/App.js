import React, { Component } from 'react';
import {
  Typography,
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'

const styles = {
  root: {
    margin: '50px auto',
    padding: '50px',
    maxWidth: 400
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  },
}
export default withStyles(styles)(
  class App extends Component {
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
  
  handleCreate = e => {
    //Prevent the default page reload
    e.preventDefault()
    //Check if the title field is non-empty
    if (this.state.title) {
    //Set the state with an updater function to mitigate async updates
      this.setState(({
        exercises,
        title
      }) => ({
      //Spread out the exercises on the next state with a new exercise object
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
          ],
        //Reset the title to clear out the input field
        title: ''
      }))
    }
  };

  //filter our exercises down to those that don’t match the id of the 
  //one that needs to be removed.
  handleDelete = id =>
    this.setState(({
      exercises
    }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  
  render() { 
    const { title, exercises } = this.state
    const { classes } = this.props
    
    return (
    <Paper className={classes.root}>
      <Typography variant='display3' align='center'>Exercises</Typography>
        <form onSubmit={this.handleCreate} className={classes.form}>
        <TextField
          name='title'
          label='Exercises'
          value={title}
          onChange={this.handleChange}
            margin='normal' />
          <Button
            type='submit'
            color='primary'
            variant='contained'
          >
          Create
          </Button>
        </form>
      <List>
        {exercises.map(({ id, title }) =>
          <ListItem key={id}>
            <ListItemText primary={title} />
             <ListItemSecondaryAction>
              <IconButton
                color='primary'
                onClick={() => this.handleDelete(id)}
              >
                <Delete/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </Paper>
    );
  }
});
