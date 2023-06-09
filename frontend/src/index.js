import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import { ModalProvider, Modal } from "./store/context/Modal";

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}

function Root() {
  return (
    <ModalProvider>
    <ReduxProvider store={store}>
      <BrowserRouter> 

        <Switch>
          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage} />

        <Route >
          <App />
          <Modal />
        </Route>

        </Switch>
        
      </BrowserRouter>
    </ReduxProvider>
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
