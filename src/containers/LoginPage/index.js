import React, { Component } from 'react'
import styles from './styles'
import {Button, CardContent, TextField, Typography, withStyles,Box} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class LoginPage extends Component{
    render(){
        const {classes} = this.props
        return(
            <div className={classes.background}>
                <div className = {classes.login}>
                    <Card>
                        <CardContent>
                            <form>
                                <div>
                                    <Typography variant='caption'>
                                        Sign In for continue ...
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
                                <Box m={1}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                    fullWidth
                                >
                                    Sign In
                                </Button>
                                </Box>
                                <Link to='/signup'>
                                    <Box m={2}>
                                    <Button variant='contained' fullWidth>Sign Up</Button>
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

LoginPage.propTypes = {
    classes: PropTypes.object
}
export default withStyles(styles)(LoginPage)