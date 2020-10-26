import yellow from '@material-ui/core/colors/yellow'
const primary = yellow[500]
const styles = theme => ({
    background:{
        // backgroundColor: theme.palette.warning.light,
        backgroundColor: primary,
        padding:40,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:'100vh',
        textAlign:'center',
        flex: '1 0 auto'
    },
    signup:{
        maxWidth: 400,
    }
})

export default styles