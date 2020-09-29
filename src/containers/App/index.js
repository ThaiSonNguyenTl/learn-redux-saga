import React, { Component } from "react";
import { ThemeProvider, withStyles } from "@material-ui/core";
import styles from "./styles";
import TaskBoard from "../TaskBoard";
import theme from "../../commons/Theme";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";

const store = configureStore();
class App extends Component {
  render() {
    // console.log('props withStyle:' ,this.props);
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}
export default withStyles(styles)(App);
