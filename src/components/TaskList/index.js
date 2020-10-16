import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TaskItem from '../TaskItem';
import PropTypes from 'prop-types'
class TaskList extends Component{
   
    render() {
        const {classes,tasks,status,onEdit, onClickDelete} = this.props
        return (<Grid key={status.value} item md={4} xs={12}>
            <Box mt={2} mb={2}>
            <div className={classes.status}>{status.label.toUpperCase()}</div>
            </Box>
            <div className = {classes.wrapperListTask}>
                {tasks.map(task => (<TaskItem 
                                        key={task.id} 
                                        task={task} 
                                        status={status} 
                                        onEdit={() => onEdit(task)} 
                                        onClickDelete={() => onClickDelete(task)}
                                    />)
                                        
                                        )}
            </div>
            </Grid>)
    }
}

TaskList.propTypes = {
    classes: PropTypes.object,
    tasks: PropTypes.array,
    status:PropTypes.object,
    onEdit:PropTypes.func,
    onClickDelete: PropTypes.func
}
export default withStyles(styles)(TaskList)