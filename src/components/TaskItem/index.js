import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import { Fab } from "@material-ui/core";
import PropTypes from 'prop-types'
class TaskItem extends Component {
  render() {
    const { classes,task, status,onEdit,onClickDelete} = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid md={8} item>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
                    
            <Grid md={4} item>
              <Typography>{status.label}</Typography>
            </Grid>
                    <p>{task.description}</p>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="add" size='small' onClick={onClickDelete}>
            <DeleteTwoToneIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" size='small' onClick={onEdit}>
            <EditIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onEdit: PropTypes.func,
  onClickDelete:PropTypes.func
}


export default withStyles(styles)(TaskItem);
