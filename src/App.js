import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { NavigationBar } from './DemoComponents/NavigationBar/NavigationBar';
import { withTranslation } from 'react-i18next';
import RouteGuardsMain from './DemoComponents/Route-Guards/RouteGuardsMain';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div style={{marginTop:'5%',marginBottom:'5%'}}>
        <Routes />
        <RouteGuardsMain/>
      </div>

    </div>

  );
}

export default withTranslation()(App)
