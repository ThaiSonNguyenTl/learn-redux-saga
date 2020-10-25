import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


const menuId = 'primary-search-account-menu';

class Header extends Component{
    state = {
        anchorEl: null,
    }
    handleProfileMenuOpen = event => {
        this.setState({
          anchorEl: event.currentTarget

        })
    }

    handleMenuClose = () => {
        this.setState({
          anchorEl: null
        })
    }

    renderMenu = () => {
        const {anchorEl} = this.state
        const isMenuOpen = Boolean(anchorEl)
        return(
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>Log Out</MenuItem>
            </Menu>
              
        )
    }

    toggleSideBar = () => {
      const{showSideBar,onToggleSideBar} = this.props
      if(onToggleSideBar){
        onToggleSideBar(!showSideBar)
      } 
    }

    render(){
        const {classes,name} = this.props
        return (
            <div className={classes.grow}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.toggleSideBar}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography className={classes.title} variant="h6" noWrap>
                    {name}
                  </Typography>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={this.handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                </Toolbar>
              </AppBar>
              {this.renderMenu()}
            </div>
          );
    }
}

Header.propTypes = {
    classes:PropTypes.object,
    name: PropTypes.string,
    showSideBar: PropTypes.bool,
    onToggleSideBar: PropTypes.func
}

export default withStyles(styles)(Header)