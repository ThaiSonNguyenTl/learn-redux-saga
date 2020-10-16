import React,{ Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from './styles'
import { PropTypes } from "prop-types";
import TextField from '@material-ui/core/TextField';

class SearchBox extends Component{
    render(){
        const {classes,handleChange} = this.props
        return(
            <form className={classes.container} noValidate autoComplete="off">
            <TextField 
                label="Search" 
                placeholder="Search"
                autoComplete='off'
                onChange={handleChange}
                margin='normal'
                className={classes.textField}
            />
            </form>
        )
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox) 