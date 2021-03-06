
const styles = theme => ({
    drawerPaper: {
        width: 240,
        maxWidth: 240,
        zIndex: 99,
        height: '100%',
        position: 'relative'
    },
    menuLink:{
        textDecoration:'none'
    },
    menuLinkActive:{
        '&>div':{
            hover:'theme.color.hoverColor',
            backgroundColor: 'yellow'
        }
    }
})
export default styles