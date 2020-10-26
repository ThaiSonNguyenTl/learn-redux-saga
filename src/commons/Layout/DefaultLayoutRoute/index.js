import { withStyles } from '@material-ui/styles'
import styles from './styles'
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

class DefaultLayoutRoute extends Component{
    render(){
        // ...remainProps : gom tat ca props con lai tru component
        const {component: MyComponent,...remainProps} = this.props
        return(
            <Route 
            {...remainProps}  
            render={routeProps => {
                return( <MyComponent {...routeProps}/>)
            }}
            />
        )

    }
}
DefaultLayoutRoute.propTypes ={
    path:PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.func,PropTypes.object]),
    name: PropTypes.string
}

export default withStyles(styles)(DefaultLayoutRoute)