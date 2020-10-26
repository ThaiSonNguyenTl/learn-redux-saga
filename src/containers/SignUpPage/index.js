import React, { Component } from 'react'
import styles from './styles'
import {Button, CardContent, TextField, Typography, withStyles,Box, FormControlLabel,Checkbox} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class SignUpPage extends Component{
    render(){
        const {classes} = this.props
        return(
            <div className={classes.background}>
                <div className = {classes.signup}>
                    <Card>
                        <CardContent>
                            <form>
                                <div>
                                    <Typography variant='caption'>
                                        Sign Up an account
                                    </Typography>
                                </div>
                                <TextField
                                    id='email'
                                    label = 'Email'
                                    className={classes.textFeild}
                                    fullWidth
                                    margin = 'normal'                      
                                />
                                
                                  <TextField
                                    id='password'
                                    label = 'Password'
                                    className={classes.textFeild}
                                    fullWidth
                                    margin = 'normal'
                                    type='password'                      
                                />
                                   <TextField
                                    id='cpassword'
                                    label = 'Confirm Password'
                                    className={classes.textFeild}
                                    fullWidth
                                    margin = 'normal'
                                    type='password'                      
                                />
                                <FormControlLabel
                                    control = {<Checkbox value='Agree'/>}
                                    label = 'I haved read and agree'
                                    className={classes.fullWidth}
                                />
                                <Box m={1}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                    fullWidth
                                >
                                    Sign Up
                                </Button>
                                </Box>
                                <Link to='/signin'>
                                    <Box m={2}>
                                    <Button>Aready have an account ?</Button>
                                    </Box>
                                </Link>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

SignUpPage.propTypes = {
    classes: PropTypes.object
}
export default withStyles(styles)(SignUpPage)