import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Datatable from './components/Datatable';

function App() {
  return (
    <Fragment>
      <Datatable/>
    </Fragment>
  );
}

export default App;
