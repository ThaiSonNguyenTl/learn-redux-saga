import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import { Fab } from "@material-ui/core";
class TaskItem extends Component {
  render() {
    const { classes,task, status } = this.props;
    return (
      <Card key={task.id}>
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
          <Fab color="primary" aria-label="add" size='small'>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" size='small'>
            <EditIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);
