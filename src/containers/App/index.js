import React, { Component } from "react";
import {  ThemeProvider, withStyles } from "@material-ui/core";
import styles from "./styles";
import TaskBoard from "../TaskBoard";
import theme from "../../commons/Theme";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading";
import Modal from '../../components/Modal'



const store = configureStore();
class App extends Component {
  render() {
    // console.log('props withStyle:' ,this.props);
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer/>
            <GlobalLoading/>
              <Modal />
             <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}
export default withStyles(styles)(App);
