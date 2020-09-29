import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTasks = [
    {
        id: 1,
        title: 'Read Book',
        description: 'Read material UI book',
        status: 1
    },
    {
        id: 2,
        title: 'Swimming',
        description: 'Feel good',
        status: 2
    },
    {
        id: 3,
        title: 'Play Game',
        description: 'PUBG Mobile',
        status: 0
    },
]

  
class TaskBoard extends Component{
    state = {
        open : false,
    }
   
    renderBoard() {
        const {classes}= this.props
        let xhtml = null
        xhtml = (
            <Grid container spacing= {2}>
                {
                    STATUSES.map( status => {
                        const taskFiltered = listTasks.filter(task => task.status === status.value)
                        return <TaskList key={status.value} tasks={taskFiltered} status={status}/>
                    })
                }
            </Grid>
        )
        return xhtml
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    openForm = () => {
        this.setState({
            open:true
        })
    }
    renderForm() {
        let xhtml = null
        let {open} = this.state
        xhtml = <TaskForm
            open={open}
            handleClose={this.handleClose}
                />
        return xhtml
    }


    render() {
        const {classes} = this.props
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" onClick={this.openForm}>
                    <AddIcon/> Add new Task
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        )
    }
}
export default withStyles(styles)(TaskBoard)
