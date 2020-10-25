import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ADMIN_ROUTES} from '../../../constants'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class SideBar extends Component{

    toggleDrawer = value => {
        const {onToggleSideBar}= this.props
        if(onToggleSideBar){
            onToggleSideBar(value)
        }
    }

    renderList(){
        const {classes} = this.props
        let xhtml = null
        xhtml = (
            
                <List component='nav'>
                   {ADMIN_ROUTES.map(item => {
                       return(
                           <NavLink 
                           key={item.path}
                           to={item.path} 
                           exact={item.exact} 
                           className={classes.menuLink} 
                           activeClassName={classes.menuLinkActive}
                           >
                            <ListItem key ={item.path} className={classes.menuItem} button>
                               {item.name}
                            </ListItem>
                           </NavLink>
                       )
                   })}
                </List>
        )
        return xhtml
    }

    render(){
        const {classes,showSideBar} = this.props
        
        return(
            <Drawer 
                open={showSideBar} 
                onClose={() => {this.toggleDrawer(false)}}
                classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="persistent"
                >
                {this.renderList()}
            </Drawer>
        )
    }
}

SideBar.propTypes ={
    classes :PropTypes.object,
    showSideBar: PropTypes.bool,
    onToggleSideBar: PropTypes.func
}

export default withStyles(styles)(SideBar)