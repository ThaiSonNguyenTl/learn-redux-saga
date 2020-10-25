import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#FFEB3B",
        secondary: "#FFEB3B",
        error: "#FFEB3B",
        hoverColor: 'rgba(0,0,0,0.8)'
    },
    typography: {
        fontFamily: 'Roboto',
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#FFEB3B",
        textColor: "#FFFFFF"
    }
})

export default theme