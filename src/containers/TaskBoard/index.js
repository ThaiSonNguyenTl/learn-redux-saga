import React, { Component } from 'react'
import styles from './styles';
import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import { connect } from "react-redux";
import { PropTypes } from  "prop-types";
import { bindActionCreators } from "redux";
import * as actionTask from "../../actions/task";
import * as actionModal from "../../actions/modal"
import SearchBox from '../../components/SearchBox';



  
class TaskBoard extends Component{
    componentDidMount(){
        const {taskActionsCreator} = this.props
        const {fetchListTask} = taskActionsCreator
        fetchListTask()
    }

    handleEditTask = task => {
        const {taskActionsCreator,actionModalCreators} = this.props
        const {setTaskEditing} = taskActionsCreator
        const {showModal,changeModalContent,changeModalTitle} = actionModalCreators
        setTaskEditing(task)
        showModal()
        changeModalTitle('Update Task')
        changeModalContent(<TaskForm/>)
    }

    showModalDeleteTask = task => {
        const {actionModalCreators,classes} = this.props
        const {showModal,changeModalContent,changeModalTitle,hideModal} = actionModalCreators
        showModal()
        changeModalTitle('Delete Task')
        changeModalContent(
            <div className={classes.modalDelete}>
                <div>
                    Are you sure want to delete {''} 
                     <span className={classes.confirmTextBold}>{task.title} ?</span>
                </div>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
              <Button variant="contained" onClick={hideModal} color="primary">
                  Cancel
                 </Button>
              </Box>
              <Button variant="contained" color="secondary" type="submit" onClick={() =>this.handleDeleTask(task.id)}>
            Agree
          </Button>
            </Box>
            </div>
        )
    }
    handleDeleTask = id => {
        // console.log(id)
        const {taskActionsCreator} = this.props
        const {deleteTask} = taskActionsCreator
        deleteTask(id)
    }
   
    renderBoard() {
        const {listTasks}= this.props
        let xhtml = null
        xhtml = (
            <Grid container spacing= {2}>
                {
                    STATUSES.map( status => {
                        const taskFiltered = listTasks.filter(task => task.status === status.value)
                        return (
                            <TaskList 
                                key={status.value} 
                                tasks={taskFiltered} 
                                status={status} 
                                onEdit={this.handleEditTask}
                                onClickDelete={this.showModalDeleteTask}
                            />)
                    })
                }
            </Grid>
        )
        return xhtml
    }
 
    openForm = () => {
        const {actionModalCreators,taskActionsCreator} = this.props
        const {setTaskEditing} = taskActionsCreator
        setTaskEditing(null)
        const {showModal,changeModalTitle,changeModalContent} = actionModalCreators
        showModal()
        changeModalTitle('Add New Task')
        changeModalContent(<TaskForm/>)
    }
  
    
    handleFilter = e => {
        const {value} = e.target
        const {taskActionsCreator} = this.props
        const {filterTask} = taskActionsCreator
        filterTask(value)

    }
    renderSearchBox(){
        let xhtml= null
        xhtml = <SearchBox handleChange={this.handleFilter}/>
        return xhtml
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.taskBoard}>
                <Box mt={2}>
                <Button variant="contained" color="primary" onClick={this.openForm} mt={2}>
                    <AddIcon/> Add new Task
                </Button>
                </Box>
                {this.renderSearchBox()}
                {this.renderBoard()}
                
                
            </div>
        )
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionsCreator: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing:PropTypes.func,
        deleteTask:PropTypes.func
    }),
    listTasks: PropTypes.array,
    actionModalCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent:PropTypes.func,

    })
}

const mapStateToProps = state => {
    return{
        listTasks: state.task.listTask
    }
}
const mapDispatchToProps = dispatch => {
    return{
        taskActionsCreator: bindActionCreators(actionTask,dispatch),
        actionModalCreators: bindActionCreators(actionModal,dispatch)
    }
};

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(TaskBoard))
