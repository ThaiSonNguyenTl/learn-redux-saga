import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Box, Grid, withStyles } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem'
import { PropTypes } from "prop-types";
import { bindActionCreators, compose } from "redux";
import * as modalAction from '../../actions/modal'
import * as taskAction from '../../actions/task'
import { connect } from "react-redux";
import { reduxForm,Field } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from './validate'
import renderSelectField from "../../components/FormHelper/Select";


class TaskForm extends Component {
  handleSubmitForm = data => {
    // console.log(data)
    const {title,description,status} = data
    const {taskActionCreators,taskEditing} = this.props
    const {addTask,updateTask} = taskActionCreators
    if(taskEditing && taskEditing.id){
      updateTask(title,description,status)
    }else{
      addTask(title,description)
    }
  }

  renderStatusSelection(){
    let xhtml = null
    const {taskEditing} =  this.props
    if(taskEditing && taskEditing.id){
      xhtml = (   
      <Field 
        name = 'status'
        id='status'
        label='Status'
        component={renderSelectField}
      >
        <MenuItem value={0}> Ready </MenuItem>
        <MenuItem value={1}> In Progress</MenuItem>
        <MenuItem value={2}> Completed</MenuItem>
      </Field>
        )
    }
    return xhtml
  }

  // validate theo field
  // required = value => {
  //   let error = "Please Enter the title"
  //   if(value !== null && typeof value !== 'undefined' && value !== ''){
  //     error = null
  //   }
  //   return error
  // }

  // minlength5 = value => {
  //   let error = null
  //   if(value.length < 5){
  //     error = 'title must be at least 5 characters'
  //   }
  //   return error
  // }

  render() {
    // console.log('prop cua redux-form',this.props)
    const {  modalAcitonCreators,classes,handleSubmit,invalid,submitting} = this.props;
    const {hideModal} = modalAcitonCreators
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
          
          <Field 
            name = 'title'
            id='title'
            label='Title'
            className={classes.textField}
            margin='normal'
            component={renderTextField}
            // validate={[this.required,this.minlength5]}
          />

          </Grid>
          <Grid item md={12}>
        
          <Field 
            name='description'
            id="description"
            label="Description"
            className={classes.textField}
            multiline
            rowsMax= '4'
            margin='normal'
            component={renderTextField}
          />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
              <Button variant="contained" onClick={hideModal} color="secondary">
            Cancel
          </Button>
              </Box>
              <Button disabled={invalid||submitting} variant="contained" color="primary" type="submit">
            Save
          </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  modalAcitonCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  taskActionCreators:PropTypes.shape({
    addTask: PropTypes.func,
    updateTask:PropTypes.func
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  initialValues: PropTypes.object
}


// muon do gia tri cho Field can sd prop cua redux-form
const mapStateToProps = state => {
  return{
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title: null,
      description: state.task.taskEditing? state.task.taskEditing.description: null,
      status: state.task.taskEditing? state.task.taskEditing.status:null
    }
  }
}
const mapDispatchToProps = dispatch => {
  return{
    modalAcitonCreators: bindActionCreators(modalAction,dispatch),
    taskActionCreators: bindActionCreators(taskAction,dispatch)
  }
}

const withConnect = connect(mapStateToProps,mapDispatchToProps)

const FORM_NAME = 'TASK_MANAGEMENT'

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate

})

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
