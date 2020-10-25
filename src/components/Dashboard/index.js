import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles'
import Header from './Header'
import Sidebar from './SideBar'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose , bindActionCreators} from 'redux'
import * as uiActions from '../../actions/ui'
import cln from 'classnames'

class Dashboard extends Component{

    handleToggleSideBar = value => {
        const {onActionSideBar} = this.props
        const {showSideBar,hideSideBar } = onActionSideBar
        if(value === true){
            showSideBar()
        }else{
            hideSideBar()
        }
    }

    render(){
        const {children,classes,name,showSideBar} = this.props
        return(
        <div className={classes.dashboard}>
            <Header 
                name={name} 
                showSideBar={showSideBar} 
                onToggleSideBar={this.handleToggleSideBar}
            />
            <div className={classes.wrapper}>
                <Sidebar 
                    showSideBar={showSideBar} 
                    onToggleSideBar={this.handleToggleSideBar}
                    />
                <div className={cln(classes.wrapperContent,{
                    [classes.shiftLeft]: showSideBar === false
                })}>
                  {children}
                </div>
            </div>
        </div>
        
        )
    }
}

Dashboard.propTypes ={
    children: PropTypes.object,
    classes: PropTypes.object,
    name : PropTypes.string,
    showSideBar:PropTypes.bool,
    onActionSideBar: PropTypes.shape({
        showSideBar: PropTypes.func,
        hideSideBar:PropTypes.func
    })
}

const mapStateToProps = state => {
    return{
        showSideBar: state.ui.showSidebar
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onActionSideBar : bindActionCreators(uiActions,dispatch)
    }
}
const withConnect = connect(mapStateToProps,mapDispatchToProps)
export default compose(
    withConnect,
    withStyles(styles)
)(Dashboard)